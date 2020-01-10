const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')
const CreatePagesMdx = require(`./gatsby/create-pages-mdx`)
const CreatePagesWp = require(`./gatsby/create-pages-wp`)

exports.sourceNodes = (
  {
    actions,
    createNodeId,
    createContentDigest,
    getNode,
    getNodes,
    getNodesByType,
    schema
  },
  pluginOptions
) => {
  const { createTypes, createNode } = actions
  // Dumy data
  /*  createNode({
    type: '',
    postId: '1234',
    date: new Date(),
    parent: '',
    children: [],
    mdxData: {},
    wpData: { test: 123 },
    id: createNodeId(`p-${1}`),
    internal: {
      type: 'MdxWpPosts',
      contentDigest: createContentDigest({ dummy: '' })
    }
  }) */
  createTypes(
    schema.buildObjectType({
      name: 'AnyObject',
      description: 'Arbitrary object',
      parseValue: value => {
        return typeof value === 'object'
          ? value
          : typeof value === 'string'
          ? JSON.parse(value)
          : null
      },
      serialize: value => {
        return typeof value === 'object'
          ? value
          : typeof value === 'string'
          ? JSON.parse(value)
          : null
      }
    })
  )
  createTypes(
    schema.buildObjectType({
      name: `MdxWpPosts`,
      fields: {
        id: { type: `ID!` },
        type: { type: 'String' },
        postId: { type: 'String' },
        date: { type: 'Date' },
        wpData: { type: 'AnyObject' },
        testField: { type: 'Float' }
      },
      interfaces: [`Node`]
    })
  )
}

exports.onCreateNode = ({
  node,
  actions,
  getNode,
  createNodeId,
  createContentDigest
}) => {
  const { createNodeField, createNode } = actions

  if (node.internal.type === 'Mdx') {
    const parent = getNode(node.parent)
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value
    })
    if (parent.internal.type === 'File') {
      createNodeField({
        name: `sourceName`,
        node,
        value: parent.sourceInstanceName
      })
      // create mdx post with WP
      if (parent.sourceInstanceName === 'posts') {
        createNode({
          type: 'MDX',
          postId: node.id,
          date: node.frontmatter.date || [],
          parent: node.id,
          children: [],
          mdxData: { ...node },
          id: createNodeId(`p-${node.id}`),
          internal: {
            type: 'MdxWpPosts',
            contentDigest: createContentDigest(node)
          }
        })
        actions.createParentChildLink({
          parent: parent,
          child: node
        })
      }
    }
  }

  if (node.internal.type === 'wordpress__POST') {
    const post = node
    actions.createNode({
      postId: post.id,
      type: 'WP',
      date: post.date,
      wpData: { ...post },
      id: createNodeId(`p-${post.id}`), // required by Gatsby
      internal: {
        type: 'MdxWpPosts', // required by Gatsby
        contentDigest: createContentDigest(post) // required by Gatsby, must be unique
      }
    })
  }
}

exports.createPages = async (
  { page, graphql, actions, reporter },
  pluginOptions
) => {
  const { sourceWordpress = false } = pluginOptions
  if (sourceWordpress) {
    /**
     * Create each page from WP
     */
    await CreatePagesWp(actions, graphql, reporter)
  }
  /**
   * Create each page of mdx
   */
  await CreatePagesMdx(actions, graphql, reporter, pluginOptions)
}
