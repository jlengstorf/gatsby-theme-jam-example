const path = require(`path`);
module.exports = ({ contentPath = 'data', basePath = '/' }) => ({
  siteMetadata: {
    title: 'Gatsby Theme Auth App',
    basePath,
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-material-ui',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `data`,
        path: contentPath,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: 'gatsby-transformer-json',
      options: {
        typeName: 'Navigation',
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: false,
        stripMetadata: false,
        defaultQuality: 75,
      },
    },
    'gatsby-transformer-sharp',
  ],
});
