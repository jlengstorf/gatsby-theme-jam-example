// https://egghead.io/lessons/gatsby-set-up-to-create-data-driven-pages-in-gatsby

const fs = require('fs');

// Verify the data directory exists
exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = 'data';

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

// Define the event type
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Navigation implements Node @dontInfer {
      id: ID!
      route: String!
      label: String!
      loadOrder: Int!
    }`);
};

// Query for nav and create pages
exports.createPages = async ({ actions, graphql, reporter }) => {
  const basePath = '/';
  actions.createPage({
    path: basePath,
    component: require.resolve('./src/templates/page.js'),
  });

  const result = await graphql(`
    query {
      allNavigation(sort: { fields: loadOrder, order: ASC }) {
        nodes {
          id
          route
          label
          loadOrder
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('error loading nav', reporter.errors);
    return;
  }

  const navList = result.data.allNavigation.nodes;

  navList.forEach(nav => {
    actions.createPage({
      path: '/',
      component: require.resolve('./src/templates/page.js'),
      context: {
        navId: nav.id,
      },
    });
  });
};

// Account for Auth0 in the gatsby build process
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    /*
     * During the build step, `auth0-js` will break because it relies on
     * browser-specific APIs. Fortunately, we don’t need it during the build.
     * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
     * during the build. (See `src/utils/auth.js` to see how we prevent this
     * from breaking the app.)
     */
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-js/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

// exports.createPages = ({ actions, reporter }) => {
//   reporter.warn("make sure to load data from somewhere!")

//   // TODO replace this with data from somewhere
//   actions.createPage({
//     path: "/",
//     component: require.resolve("./src/templates/page.js"),
//     context: {
//       heading: "Your Theme Here",
//       content: `
//         <p>
//           Use this handy theme example as the basis for your own amazing theme!
//         </p>
//         <p>
//           For more information, see
//           <a href="https://themejam.gatsbyjs.org">themejam.gatsbyjs.org</a>.
//         </p>
//       `,
//     },
//   })
// }
