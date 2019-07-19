exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      query allImageFilesQuery {
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              name
            }
          }
        }
      }
    `).then(results => {
      results.data.allFile.edges.forEach(({ node }) => {
        let namePath = ""
        if (node.name === "coverPage") {
          namePath = `/`
        } else {
          namePath = `/${node.name}`
        }

        createPage({
          path: namePath,
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
