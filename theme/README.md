# Gatsby Theme Tasting Notes

This is a very basic fork of the Gatsby Theme Jam theme. It's made to gather persona tasting notes about spirits. Updates will follow in the next months.

See the [live demo](https://gatsby-theme-tasting-notes.netlify.com)

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme

    ```sh
    npm install --save gatsby-theme-tasting-notes
    ```

2.  Add the theme to your `gatsby-config.js`:

    ```js
    module.exports = {
      plugins: ["gatsby-theme-tasting-notes"],
    }
    ```

3.  Start your site
    ```sh
    gatsby develop
    ```

## Submission Checklist

To ensure your Theme Jam submission [follows the rules](https://themejam.gatsbyjs.org/rules), use this checklist:

- [ ] Use our [accessibility guide][a11y] to ensure your site meets our accessibility standards
- [ ] Run a performance audit using [Lighthouse][] and/or [WebPageTest][]
- [x] Set up a live demo using [Netlify][] or [GitHub Pages][]
- [x] Add installation documentation to the README
- [x] Update the `name` field in `package.json`
- [x] Update the `author` field in `package.json`
- [x] Update the `repository` field in `package.json`
- [x] Make sure the theme’s `keywords` in `package.json` include `gatsby`, `gatsby-theme`, and `gatsby-plugin`
- [ ] Publish your theme to npm ([docs][npmpublish])
- [ ] Submit your theme at https://themejam.gatsbyjs.org

[a11y]: https://gatsbyjs.org/docs/making-your-site-accessible#how-to-improve-accessibility
[lighthouse]: https://developers.google.com/web/tools/lighthouse/
[axe]: https://www.deque.com/axe/
[webpagetest]: http://webpagetest.org/
[netlify]: https://netlify.com
[github pages]: https://pages.github.com/
[npmpublish]: https://docs.npmjs.com/cli/publish
