exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      query allImageFilesQuery {
        allFile(filter: { sourceInstanceName: { eq: "images" } }, sort: { fields: name, order:ASC } ) {
          edges {
            node {
              name
            }
          }
        }
      }
    `).then(results => {
      results.data.allFile.edges.forEach(({ node }, index) => {
        createPage({
          path: index === 0 ? `/` : `/${node.name}`,
          component: require.resolve("./src/templates/page.js"),
          context: {
            slug: node.name,
          },
        })
      })
      resolve()
    })
  })
}
