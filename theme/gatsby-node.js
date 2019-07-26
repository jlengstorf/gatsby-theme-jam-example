const page = (node, index) => {
  if (!node) return

  return {
    title: index === 0 ? "" : index.toString(10),
    path: index === 0 ? "" : `${node.name}`,
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      query allImageFilesQuery {
        allFile(
          filter: { sourceInstanceName: { eq: "images" } }
          sort: { fields: name, order: ASC }
        ) {
          edges {
            next {
              name
            }
            node {
              name
            }
            previous {
              name
            }
          }
        }
      }
    `).then(results => {
      results.data.allFile.edges.forEach(({ next, node, previous }, index) => {
        const currentPage = page(node, index)
        const nextPage = page(next, index + 1)
        const previousPage = page(previous, index - 1)

        createPage({
          path: currentPage.path || "/",
          component: require.resolve("./src/templates/page.js"),
          context: {
            nextPage,
            previousPage,
            title: currentPage.title,
            slug: node.name,
          },
        })
      })
      resolve()
    })
  })
}
