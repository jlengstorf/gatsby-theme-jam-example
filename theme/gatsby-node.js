const fs = require('fs');
const path = require(`path`);
const mkdirp = require(`mkdirp`);
const Debug = require(`debug`);

const debug = Debug(`gatsby-theme-auth-app`);

// These are customizable theme options we only need to check once
let basePath;
let contentPath;
let assetPath;
let excelPath;
let eventPath;

// These templates are simply data-fetching wrappers that import components
const PageTemplate = require.resolve(`./src/templates/index`);
const ToolsTemplate = require.resolve(`./src/templates/tools`);
const PostTemplate = require.resolve(`./src/templates/post`);
const TagTemplate = require.resolve(`./src/templates/Tags`);

// Verify the data directory exists
exports.onPreBootstrap = ({ store, reporter }, options) => {
  const { program } = store.getState();
  basePath = options.basePath || `/`;
  contentPath = options.contentPath || `content/data`;
  assetPath = options.assetPath || `content/assets`;
  toolPath = options.toolPath || `content/tools`;
  excelPath = options.excelPath || `content/excel`;
  eventPath = options.eventPath || `content/event`;
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
  if (!fs.existsSync(assetPath)) {
    reporter.info(`creating the ${assetPath} directory`);
    fs.mkdirSync(assetPath);
  }
  if (!fs.existsSync(toolPath)) {
    reporter.info(`creating the ${toolPath} directory`);
    fs.mkdirSync(toolPath);
  }
  if (!fs.existsSync(excelPath)) {
    reporter.info(`creating the ${excelPath} directory`);
    fs.mkdirSync(excelPath);
  }
  if (!fs.existsSync(eventPath)) {
    reporter.info(`creating the ${eventPath} directory`);
    fs.mkdirSync(eventPath);
  }

  const dirs = [
    path.join(program.directory, contentPath),
    path.join(program.directory, assetPath),
    path.join(program.directory, excelPath),
    path.join(program.directory, eventPath),
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

exports.onCreateNode = ({ node, getNode }, settings) => {
  // Not a markdown file, skip...
  if (node.internal.type !== 'MarkdownRemark') return;
  console.log('PLUGIN', node.fields.slug);
};

// Query for nav and create pages
exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      site {
        siteMetadata {
          title
          description
          greeting
          copyright
          author
          loginDesc
          isAuthApp
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
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        nodes {
          frontmatter {
            slug
            categories
          }
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
      hero: file(
        relativePath: { regex: "/(jpg)|(jpeg)|(png)|(svg)/" }
        relativeDirectory: { eq: "hero" }
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
  const {
    site: { siteMetadata },
    brandLogo,
    hero,
  } = result.data;
  const posts = result.data.allMdx.nodes;
  let tags = [
    ...new Set(
      posts.reduce((acc, post) => {
        return acc.concat(post.frontmatter.categories);
      }, []),
    ),
  ];

  const {
    title: siteTitle,
    description: siteDescription,
    social: socialLinks,
    loginDesc: loginOption,
    isAuthApp: isAuthApp,
    copyright: copyrightMessage,
    greeting: siteGreeting,
  } = siteMetadata;
  const brand = brandLogo;
  const slugs = [];

  posts.forEach(post => {
    slugs.push(post.frontmatter.slug);
  });

  // Create a page for each Article
  posts.forEach(post => {
    const slug = post.frontmatter.slug;
    createPage({
      path: slug,
      component: require.resolve(PostTemplate),
      context: {
        siteTitle,
        siteDescription,
        siteGreeting,
        copyrightMessage,
        loginOption,
        socialLinks,
        brand,
        isAuthApp,
        slug,
        slugs,
      },
    });
  });
  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag}`,
      component: require.resolve(TagTemplate),
      context: {
        tag,
      },
    });
  });
  posts.forEach(post => {
    const slug = post.frontmatter.slug;
    createPage({
      path: basePath,
      component: require.resolve(PageTemplate),
      context: {
        siteTitle,
        siteDescription,
        siteGreeting,
        copyrightMessage,
        loginOption,
        socialLinks,
        brand,
        hero,
        isAuthApp,
        slug,
        slugs,
      },
    });
  });

  // actions.createPage({
  //   path: '/callback',
  //   component: CallbackTemplate,
  // });
  // actions.createPage({
  //   path: '/404',
  //   component: PageNotFoundTemplate,
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
          {
            test: /\.js$/,
            include: path.dirname(require.resolve('gatsby-theme-auth-app')),
            use: [loaders.js()],
          },
        ],
      },
    });
  }
};
