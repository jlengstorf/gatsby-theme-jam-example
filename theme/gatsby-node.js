const HomepageTemplate = require.resolve("./src/templates/home.jsx")
const PageTemplate = require.resolve("./src/templates/page.jsx")

exports.createPages = ({ actions }) => {
  // Create Homepage
  actions.createPage({
    path: "/",
    component: HomepageTemplate,
    context: {},
  })
}
