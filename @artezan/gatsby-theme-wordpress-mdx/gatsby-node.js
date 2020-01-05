const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')
const CreatePagesMdx = require(`./gatsby/create-pages-mdx`)
const CreatePagesWp = require(`./gatsby/create-pages-wp`)

exports.sourceNodes = async (
  {
    actions,
    createNodeId,
    createContentDigest,
    getNode,
    getNodes,
    getNodesByType
  },
  pluginOptions
) => {
  const mdxNodes = getNodesByType('Mdx')
  const wpNodes = getNodesByType('wordpress__POST')
  const { sourceWordpress = false, sourceMdxPosts = false } = pluginOptions
  // todo create fake node
  if (sourceWordpress) {
    wpNodes.forEach(post => {
      const node = {
        postId: post.id,
        type: 'WP',
        date: post.date,
        wpData: { ...post },
        id: createNodeId(`p-${post.id}`), // required by Gatsby
        internal: {
          type: 'MdxWpPosts', // required by Gatsby
          contentDigest: createContentDigest(post) // required by Gatsby, must be unique
        }
      }
      actions.createNode(node)
    })
  }
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
          date: node.frontmatter.date,
          mdxData: { ...node },
          id: createNodeId(`p-${node.id}`),
          internal: {
            type: 'MdxWpPosts',
            contentDigest: createContentDigest(node)
          }
        })
      }
    }
  }

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}

exports.createPages = async (
  { page, graphql, actions, reporter },
  pluginOptions
) => {
  const { sourceWordpress = false } = pluginOptions
  console.log(sourceWordpress)
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
