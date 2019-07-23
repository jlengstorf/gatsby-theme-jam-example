const getPreviousPagePath = (page, currentPageIndex) => {
  if (!page) return null;
  if (currentPageIndex - 1 === 0) return '/';
  return `/${page.name}`;
}

const getNextPagePath = page => {
  if (!page) return null;
  return `/${page.name}`;
}

const getCurrentPagePath = (page, currentPageIndex) => {
  if (currentPageIndex === 0) return '/';
  return `/${page.name}`;
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
      results.data.allFile.edges.forEach(({ next, node, previous }, index) => {
        const currentPath = getCurrentPagePath(node, index)
        const nextPage = getNextPagePath(next, index)
        const previousPage = getPreviousPagePath(previous, index)

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
