const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')
const CreatePagesMdx = require(`./gatsby/create-pages-mdx`)
const CreatePagesWp = require(`./gatsby/create-pages-wp`)

/* exports.onPreInit = (_, pluginOptions) => {
  // console.log(_)
  console.log("HERE",pluginOptions);
  
} */

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

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
  /**
   * Create each page of mdx
   */
  await CreatePagesMdx(actions, graphql, reporter)
  const { sourceWordpress = false } = pluginOptions
  if (sourceWordpress) {
    /**
     * Create each page from WP
     */
    await CreatePagesWp(actions, graphql, reporter)
  }
}
