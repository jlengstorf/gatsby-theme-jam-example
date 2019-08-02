const HomepageTemplate = require.resolve("./src/templates/home.jsx")

exports.createPages = ({ actions }) => {
  // Create Homepage
  actions.createPage({
    path: "/",
    component: HomepageTemplate,
    context: {},
  })
}
