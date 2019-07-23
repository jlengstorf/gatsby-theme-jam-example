exports.createPages = ({ actions }) => {
  actions.createPage({
    path: "/",
    component: require.resolve("./src/templates/page.jsx"),
    context: {
      heading: "Scarlet",
      content: `<p>test</p>`,
    },
  })
}
