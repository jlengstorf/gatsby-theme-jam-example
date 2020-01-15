const path = require('path')

module.exports = async function CreatePagesMdx(
  actions,
  graphql,
  reporter,
  sourceMdxPosts
) {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
              sourceName
            }
            frontmatter {
              section
              layout
            }
          }
        }
      }
      allMdxWpPosts(filter: { type: { eq: "MDX" } }) {
        edges {
          node {
            id
            mdxData {
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  result.data.allMdx.edges.forEach(({ node }) => {
    const {
      frontmatter: { section, layout },
      id
    } = node
    let layoutPath
    if (['index', 'pages'].includes(node.fields.sourceName)) {
      if (node.fields.sourceName === 'index') {
        layoutPath = `../src/templates/Landing.jsx`
      } else if (node.fields.sourceName === 'pages') {
        layoutPath = `../src/templates/page2.js`
      }
      createPage({
        path: node.fields.slug,
        component: path.join(__dirname, layoutPath),
        context: { id: node.id }
      })
    }
  })
  const { edges: mdxPosts } = result.data.allMdxWpPosts
  if (sourceMdxPosts && mdxPosts.length) {
    const postTemplate = path.join(__dirname, `../src/templates/mdxPost.js`)
    mdxPosts.forEach(({ node }) => {
      createPage({
        path: node.mdxData.fields.slug,
        component: postTemplate,
        context: { id: node.id }
      })
    })
  }
}
