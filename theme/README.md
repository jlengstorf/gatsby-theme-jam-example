# Gatsby Theme Authentication Enabled Auth0

This is theme which incorporates Auth0, Material-UI for styling components and a sidebar navigation.

See the [live demo](https://gatsby-theme-jam-example.netlify.com)

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme

    ```sh
    npm install --save gatsby-theme-auth-app
    ```

2.  Add the theme to your `gatsby-config.js`:

#### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-auth-app`,
      options: {
        // basePath defaults to `/`
        basePath: `/articles`,
      },
    },
  ],
};
```

### Theme options

| Key           | Default value       | Description                                                                                               |
| ------------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| `basePath`    | `/`                 | Root url for all blog posts                                                                               |
| `contentPath` | `/content/articles` | Location of blog posts                                                                                    |
| `assetPath`   | `/content/assets`   | Location of assets                                                                                        |
| `mdx`         | `true`              | Configure `gatsby-plugin-mdx` (if your website already is using the plugin pass `false` to turn this off) |

### Additional configuration

In addition to the theme options, there are a handful of items you must modify via the `siteMetadata` object in your site's `gatsby-config.js`

```js
// gatsby-config.js
module.exports = {
  siteMetadata: {
    // Used for the site title and SEO
    title: `My Website Title`,
    // Used to provide alt text for your avatar
    author: `My Name`,
    // Used for SEO
    description: `My site description...`,
    //
    loginDesc: `The login button description (Ex. Login or Login / Signup)`,
    // Used for social links in the root footer
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/reubenellis8`,
      },
      {
        name: `github`,
        url: `https://github.com/ethriel3695`,
      },
    ],
  },
};
```

1.  **`/content`**: A content folder holding assets that the theme expects to exist. This will vary from theme to theme -- this starter expects a logo directory with either a png, jpg or svg image, an article directory for content and a data directory with a navItems.json object for the navigation items within the sidebar menu. Replace the logo image file, delete the demo articles, replace the navItems.json and add your own! **`NOTE`** If the logo directory is empty the theme will use the title attribute in the **`gatsby-config.js`** file.

2.  **`/src`**: You will probably want to customize your site to personalize it. The files under `/src/gatsby-theme-auth-app` _shadow_, or override, the files of the same name in the `gatsby-theme-auth-app` package. To learn more about this, check out the [guide to getting started with using the blog theme starter](http://gatsbyjs.org/docs/themes/using-a-gatsby-theme).

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This file tells [Prettier](https://prettier.io/) which configuration it should use to lint files.

5.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. When using themes, it's where you'll include the theme plugin, and any customization options the theme provides.

6.  **`LICENSE`**: Gatsby is licensed under the MIT license.

7.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

8.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

9.  **`README.md`**: A text file containing useful reference information about your project.

## Submission Checklist

To ensure your Theme Jam submission [follows the rules](https://themejam.gatsbyjs.org/rules), use this checklist:

- [ ] Use our [accessibility guide][a11y] to ensure your site meets our accessibility standards
- [ ] Run a performance audit using [Lighthouse][] and/or [WebPageTest][]
- [ ] Set up a live demo using [Netlify][] or [GitHub Pages][]
- [ ] Add installation documentation to the README
- [ ] Update the `name` field in `package.json`
- [ ] Update the `author` field in `package.json`
- [ ] Update the `repository` field in `package.json`
- [ ] Make sure the theme’s `keywords` in `package.json` include `gatsby`, `gatsby-theme`, and `gatsby-plugin`
- [ ] Publish your theme to npm ([docs][npmpublish])
- [ ] Submit your theme at https://themejam.gatsbyjs.org

[a11y]: https://gatsbyjs.org/docs/making-your-site-accessible#how-to-improve-accessibility
[lighthouse]: https://developers.google.com/web/tools/lighthouse/
[axe]: https://www.deque.com/axe/
[webpagetest]: http://webpagetest.org/
[netlify]: https://netlify.com
[github pages]: https://pages.github.com/
[npmpublish]: https://docs.npmjs.com/cli/publish
