exports.createPages = ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  return graphql(`
    query lillyJoanQuery {
      allFile {
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
  })
}
