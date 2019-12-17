const path = require('path')

module.exports = async function CreatePagesMdx(actions, graphql, reporter) {
  console.log('HERE')
    const { createPage } = actions;
      const result = await graphql(`
      query {
        allMdx {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                section
                layout
              }
            }
          }
        }
      }
    `);
      if (result.errors) {
      reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
    }
    result.data.allMdx.edges.forEach(({ node }) => {
      console.log(node);
        const { frontmatter: { section, layout }, id } = node;
        if (section)
        return;
          let layoutPath;
        if (layout === 'landing') {
        layoutPath = `../src/templates/Landing.jsx`;
      }
      else if (layout === 'page') {
        layoutPath = `../src/layouts/post.jsx`;
      }
      createPage({
        path: node.fields.slug,
        component: path.join(__dirname, layoutPath),
        context: { id: node.id }
      });
    });
  }