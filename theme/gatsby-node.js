exports.createPages = ({ actions }) => {
  actions.createPage({
    path: "/",
    component: require.resolve("./src/templates/page.js"),
    context: {
      heading: "Scarlet",
      content: `
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet massa tincidunt nunc pulvinar sapien et. Non nisi est sit amet facilisis magna etiam tempor. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Quisque egestas diam in arcu cursus euismod. Amet mattis vulputate enim nulla aliquet. Felis donec et odio pellentesque diam volutpat commodo sed. Ultrices in iaculis nunc sed augue lacus viverra. Ac placerat vestibulum lectus mauris ultrices eros. Suscipit adipiscing bibendum est ultricies integer quis auctor. Mi bibendum neque egestas congue quisque egestas diam. Semper auctor neque vitae tempus quam pellentesque nec. Nulla facilisi nullam vehicula ipsum a. Luctus venenatis lectus magna fringilla. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Massa vitae tortor condimentum lacinia quis. Scelerisque in dictum non consectetur. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. 
        </p>
      `,
    },
  })
}
