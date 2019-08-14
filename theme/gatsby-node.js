// https://github.com/scttcper/gatsby-theme-casper
// https://github.com/akzhy/gatsby-theme-elemental/blob/master/gatsby-theme-elemental/gatsby-node.js
// https://github.com/smakosh/gatsby-theme-portfolio
// https://github.com/nnnkit/gatsby-theme-grid-blog
// https://themejam.gatsbyjs.org/showcase

const fs = require('fs');
const path = require(`path`);
const mkdirp = require(`mkdirp`);
const crypto = require(`crypto`);
const Debug = require(`debug`);

const debug = Debug(`gatsby-theme-auth-app`);

// These are customizable theme options we only need to check once
let basePath;
let contentPath;
let assetPath;

// These templates are simply data-fetching wrappers that import components
const PageTemplate = require.resolve(`./src/templates/page`);
const CallbackTemplate = require.resolve(`./src/templates/callback`);
const PageNotFoundTemplate = require.resolve(`./src/templates/404`);
// const ArticleTemplate = require.resolve(`./src/templates/post`);
const ArticlesTemplate = require.resolve(`./src/templates/posts`);
// Verify the data directory exists
exports.onPreBootstrap = ({ store }, options) => {
  const { program } = store.getState();
  basePath = options.basePath || `/`;
  contentPath = options.contentPath || `content/posts`;
  assetPath = options.assetPath || `content/posts`;

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

const mdxResolverPassthrough = fieldName => async (
  source,
  args,
  context,
  info,
) => {
  const type = info.schema.getType(`Mdx`);
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  });
  const resolver = type.getFields()[fieldName].resolve;
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  });
  return result;
};
// exports.sourceNodes = ({ actions, schema }) => {
//   const { createTypes } = actions;
//   createTypes(
//     schema.buildObjectType({
//       name: `BlogPost`,
//       fields: {
//         id: { type: `ID!` },
//         title: {
//           type: `String!`,
//         },
//         slug: {
//           type: `String!`,
//         },
//         date: { type: `Date`, extensions: { dateformat: {} } },
//         tags: { type: `[String]!` },
//         keywords: { type: `[String]!` },
//         excerpt: {
//           type: `String!`,
//           args: {
//             pruneLength: {
//               type: `Int`,
//               defaultValue: 140,
//             },
//           },
//           resolve: mdxResolverPassthrough(`excerpt`),
//         },
//         body: {
//           type: `String!`,
//           resolve: mdxResolverPassthrough(`body`),
//         },
//       },
//       interfaces: [`Node`],
//     }),
//   );
// };

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
          isAuthApp
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
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
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
  } = result.data;
  const posts = result.data.allMdx.edges;

  const {
    title: siteTitle,
    social: socialLinks,
    loginDesc: loginOption,
    isAuthApp: isAuthApp,
  } = siteMetadata;
  const brand = brandLogo;

  // Create a page for each Article
  posts.forEach(({ node }, index) => {
    actions.createPage({
      // This is the slug we created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: ArticlesTemplate,
      // We can use the values in this context in
      // our page layout component
      context: { id: node.id },
    });
  });
  // posts.forEach(({ node: post }, index) => {
  //   const previous = index === posts.length - 1 ? null : posts[index + 1];
  //   const next = index === 0 ? null : posts[index - 1];
  //   const { slug } = article;
  //   actions.createPage({
  //     path: slug,
  //     component: ArticleTemplate,
  //     context: {
  //       ...post,
  //       siteTitle,
  //       socialLinks,
  //       previous,
  //       next,
  //     },
  //   });
  // });

  // actions.createPage({
  //   path: basePath,
  //   component: ArticlesTemplate,
  //   context: {
  //     posts,
  //     siteTitle,
  //     socialLinks,
  //   },
  // });

  actions.createPage({
    path: basePath,
    component: PageTemplate,
    context: {
      siteTitle,
      loginOption,
      socialLinks,
      brand,
      isAuthApp,
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
};

const { createFilePath } = require('gatsby-source-filesystem');
// Create fields for post slugs and source
// This will change with schema customization with work
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // We only want to operate on `Mdx` nodes. If we had content from a
  // remote CMS we could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      // Name of the field you are adding
      name: 'slug',
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. We
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `/blog${value}`,
    });
  }
};
// exports.onCreateNode = ({ node, actions, getNode, createNodeId }) => {
//   const { createNode, createParentChildLink } = actions;

//   const toPostPath = node => {
//     const { dir } = path.parse(node.relativePath);
//     return path.join(basePath, dir, node.name);
//   };

//   // Make sure it's an MDX node
//   if (node.internal.type !== `Mdx`) {
//     return;
//   }

//   // Create source field (according to contentPath)
//   const fileNode = getNode(node.parent);
//   const source = fileNode.sourceInstanceName;

//   if (node.internal.type === `Mdx` && source === contentPath) {
//     const slug = toPostPath(fileNode);

//     const fieldData = {
//       title: node.frontmatter.title,
//       tags: node.frontmatter.tags || [],
//       slug,
//       date: node.frontmatter.date,
//     };
//     createNode({
//       ...fieldData,
//       // Required fields.
//       id: createNodeId(`${node.id} >>> BlogPost`),
//       parent: node.id,
//       children: [],
//       internal: {
//         type: `BlogPost`,
//         contentDigest: crypto
//           .createHash(`md5`)
//           .update(JSON.stringify(fieldData))
//           .digest(`hex`),
//         content: JSON.stringify(fieldData),
//         description: `Blog Posts`,
//       },
//     });
//     createParentChildLink({ parent: fileNode, child: node });
//   }
// };

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
