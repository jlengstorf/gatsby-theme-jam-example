const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')
const CreatePagesMdx = require(`./gatsby/create-pages-mdx`)



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
}

exports.createPages = async ({ page, graphql, actions, reporter }) => {
  /**
   * Create each page of mdx
   */
  await CreatePagesMdx(actions, graphql, reporter)
}


