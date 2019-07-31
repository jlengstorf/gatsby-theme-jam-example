const HomepageTemplate = require.resolve("./src/templates/home.jsx")
const PageTemplate = require.resolve("./src/templates/page.jsx")

exports.createPages = ({ actions }) => {
  // Create Homepage
  actions.createPage({
    path: "/",
    component: HomepageTemplate,
    context: {},
  }),
    // Create 404 Pages
    actions.createPage({
      path: "/404",
      component: PageTemplate,
      context: {
        heading: "404",
        content: "404",
      },
    })
}
