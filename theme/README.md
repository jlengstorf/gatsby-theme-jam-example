# Gatsby Theme Authentication Enabled Auth0

This is theme which incorporates Auth0, Material-UI for styling components and a sidebar navigation.

See the [live demo](https://sleepy-haibt-f5d703.netlify.com/)

## Quick Start

1.  Use the auth app starter

    ```sh
    gatsby new my-auth-app https://github.com/ethriel3695/gatsby-theme-auth-app
    ```

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
        basePath: `/posts`,
      },
    },
  ],
};
```

### Theme options

| Key           | Default value     | Description                                                                                               |
| ------------- | ----------------- | --------------------------------------------------------------------------------------------------------- |
| `basePath`    | `/`               | Root url for all blog posts                                                                               |
| `contentPath` | `/content/posts`  | Location of blog posts                                                                                    |
| `assetPath`   | `/content/assets` | Location of assets                                                                                        |
| `mdx`         | `true`            | Configure `gatsby-plugin-mdx` (if your website already is using the plugin pass `false` to turn this off) |

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
    // The login button description (Ex. Login or Login / Signup). Default: Login / Signup
    loginDesc: `Login / Signup`,
    // isAuth determines if authentication is enabled for your app. Default: true
    isAuthApp: true // options: true, false
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

In addition replace the values in the site's `env.development` file with the correct values from your Auth0 account.
If you do not have an Auth0 account create one for free [Auth0](https://auth0.com/signup?&signUpData=%7B%22category%22%3A%22button%22%7D)

```js
// env.development
AUTH0_DOMAIN = domain.auth0.com; // Replace domain with your auth0 domain
AUTH0_CLIENT_ID = secret_client_id; // This ID can be found after creating an Application within Auth0 within the Application tab
AUTH0_CALLBACK_URL = `http://localhost:8000/callback`; //Remove the literal string character when replacing the callback url
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
