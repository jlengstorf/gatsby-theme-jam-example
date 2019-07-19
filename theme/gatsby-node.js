const fs = require('fs');
const path = require(`path`);
const mkdirp = require(`mkdirp`);
const Debug = require(`debug`);

const debug = Debug(`gatsby-theme-auth-app`);

// These are customizable theme options we only need to check once
let basePath
let contentPath
let assetPath

// These templates are simply data-fetching wrappers that import components
const PageTemplate = require.resolve(`./src/templates/page`);
const CallbackTemplate = require.resolve(`./src/templates/callback`);
const PageNotFoundTemplate = require.resolve(`./src/templates/404`);
// const PostsTemplate = require.resolve(`./src/templates/posts`)
// Verify the data directory exists
exports.onPreBootstrap = ({ store }, options) => {
  const { program } = store.getState();
  basePath = options.basePath || `/`;
  contentPath = options.contentPath || `content/posts`;
  assetPath = options.assetPath || `content/assets`;

  const dirs = [
    path.join(program.directory, contentPath),
    path.join(program.directory, assetPath),
  ];

  dirs.forEach(dir => {
    debug(`Initializing ${dir} directory`);
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  });
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
  
  const result = await graphql(`
    {
      site {
        siteMetadata {
          title
          description
          author
          loginDesc
          social {
            name
            url
          }
        }
      }
      allNavigation(sort: { fields: loadOrder, order: ASC }) {
        nodes {
          id
          route
          label
          loadOrder
        }
      }
      brandLogo: file(
        relativePath: { regex: "/(jpg)|(jpeg)|(png)|(svg)/" }
        relativeDirectory: { eq: "logo" }
      ) {
        childImageSharp {
          fluid(maxWidth: 250) {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcSetWebp
            sizes
            originalImg
            originalName
          }
        }
        extension
        publicURL
      }
    }
  `);

  // ...GatsbyImageSharpFluid
  if (result.errors) {
    reporter.panic('error loading nav', reporter.errors);
    return;
  }

  // Create Posts and Post pages.
  const { site: { siteMetadata }, brandLogo } = result.data;
  const { title: siteTitle, social: socialLinks, loginDesc: loginOption } = siteMetadata;
  const brand = brandLogo;

  actions.createPage({
    path: basePath,
    component: PageTemplate,
    context: {
      siteTitle,
      loginOption,
      socialLinks,
      brand,
    },
  });

  actions.createPage({
    path: '/callback',
    component: CallbackTemplate,
  });
  actions.createPage({
    path: '/404',
    component: PageNotFoundTemplate,
  });

  // actions.createPage({
  //   path: '/home',
  //   component: require.resolve('./src/pages/index.js'),
  // });

  // const navList = result.data.allNavigation.nodes;

  // navList.forEach(nav => {
  //   actions.createPage({
  //     path: '/',
  //     component: require.resolve('./src/templates/page.js'),
  //     context: {
  //       navId: nav.id,
  //     },
  //   });
  // });
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
