const HomepageTemplate = require.resolve("./src/templates/home.jsx")
const PageTemplate = require.resolve("./src/templates/page.jsx")
const jeffsum = require("jeffsum")

exports.createPages = ({ actions }) => {
  // Create Homepage
  actions.createPage({
    path: "/",
    component: HomepageTemplate,
    context: {
      work: {
        heading: "Work",
        content: "Just a few projects",
      },
      about: {
        heading: "About",
        content: jeffsum(3, "sentences"),
      },
    },
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
