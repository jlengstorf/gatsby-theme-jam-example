# Gatsby Theme Jam Submission Example

This repo is an example and potential starting point for theme creators.

It includes:
- a bare-bones theme (located in `theme/`) that includes basic setup
- a demo site (located in `demo/`) that installs the theme
- a Yarn workspaces configuration so the theme and demo can be worked on simultaneously

## How to use this repo

**NOTE:** Make sure to replace `USERNAME` with your GitHub username and `THEMENAME` with your theme name.

1.  Fork this repo.

2.  Rename the forked repo `gatsby-theme-THEMENAME`. (Make sure to replace `THEMENAME` with your chosen name.)

3.  Get the theme set up locally.
    ```sh
    # clone the repo
    git clone git@github.com:USERNAME/gatsby-theme-THEMENAME.git

    # move into the directory
    cd gatsby-theme-THEMENAME

    # install dependencies
    yarn
    ```

4.  Start the demo site.
    ```sh
    yarn workspace demo develop
    ```

    The demo will start at http://localhost:8000

5.  Start editing the theme! Any changes you make to the local `theme` directory will be reflected on the demo site for easy local development.

6.  Follow the [submission checklist](./theme/README.md#submission-checklist) to make sure your theme qualifies to win!

7.  [Submit your theme](https://themejam.gatsbyjs.org/submit) to win!

## More information

For contest rules and more information, see [the Theme Jam website](https://themejam.gatsbyjs.org).
