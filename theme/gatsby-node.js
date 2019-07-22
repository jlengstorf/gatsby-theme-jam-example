const processPagePath = page => {
  if (!page) return null
  return page.name === '00' ? '/' : `/${page.name}`
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      query allImageFilesQuery {
        allFile(filter: { sourceInstanceName: { eq: "images" } }, sort: { fields: name, order:ASC } ) {
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
      results.data.allFile.edges.forEach(({ next, node, previous }) => {
        const currentPath = processPagePath(node)
        const nextPage = processPagePath(next)
        const previousPage = processPagePath(previous)

        createPage({
          path: currentPath,
          component: require.resolve("./src/templates/page.js"),
          context: {
            nextPage,
            previousPage,
            slug: node.name,
          },
        })
      })
      resolve()
    })
  })
}
