const HomepageTemplate = require.resolve("./src/templates/home.jsx")
const PageTemplate = require.resolve("./src/templates/page.jsx")
const jeffsum = require("jeffsum")
const Projects = require.resolve("./src/data/projects")

exports.createPages = ({ actions }) => {
  // Create Homepage
  actions.createPage({
    path: "/",
    component: HomepageTemplate,
    context: {
      heading: "Scarlet",
      work: {
        heading: "Work",
        content: jeffsum(2, "sentences"),
        projects: Projects,
      },
      about: {
        heading: "About",
        content: jeffsum(5, "sentences"),
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
