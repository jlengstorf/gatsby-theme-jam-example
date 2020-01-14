const path = require('path')
const { paginate } = require('gatsby-awesome-pagination')

const getOnlyPublished = edges =>
  edges.filter(({ node }) => node.wpData.status === 'publish')

module.exports = async function CreatePagesWp(actions, graphql, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMdxWpPosts(filter: { type: { eq: "WP" } }) {
        edges {
          node {
            id
            wpData {
              slug
              status
              wordpress_id
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" wp query')
    throw new Error(result.errors)
  }

  // In production builds, filter for only published posts.
  const allPosts = result.data.allMdxWpPosts.edges
  const posts =
    process.env.NODE_ENV === 'production'
      ? getOnlyPublished(allPosts)
      : allPosts

  const postTemplate = path.join(__dirname, `../src/templates/wpPost.js`)
  const blogTemplate = path.join(__dirname, `../src/templates/blog.js`)

  posts.forEach(({ node: post }) => {
    // Create the Gatsby page for this WordPress post
    createPage({
      path: `/${post.wpData.slug}/`,
      component: postTemplate,
      context: {
        id: post.id
      }
    })
  })
  // Create a paginated blog, e.g., /, /page/2, /page/3
  /*  paginate({
    createPage,
    items: posts,
    itemsPerPage: 10,
    pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? `/blog` : `/blog/page`),
    component: blogTemplate
  }) */
}
