const HomepageTemplate = require.resolve("./src/templates/home.jsx")
const PageTemplate = require.resolve("./src/templates/page.jsx")
const jeffsum = require("jeffsum")

exports.createPages = ({ actions }) => {
  // Create Homepage
  actions.createPage({
    path: "/",
    component: HomepageTemplate,
    context: {
      heading: "Scarlet",
      content: jeffsum(5, "sentences"),
    },
  })
  // Create Content Pages - todo: with mdx page dir
  actions.createPage({
    path: "/example-page",
    component: PageTemplate,
    context: {
      heading: "Scarlet Page",
      content: jeffsum(5, "sentences"),
    },
  })
}
