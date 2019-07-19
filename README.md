# Gatsby Theme Picture Book

This repo is a monorepo for the `gatsby-theme-picture-book`

It includes:

- a the theme (located in `theme/`) that includes a sample book
- a demo site (located in `demo/`) that installs the theme (and should probably have a different sample book)
- a Yarn workspaces configuration so the theme and demo can be worked on simultaneously

## How to use this repo

- Clone the repo
- Run `yarn` to install dependencies
- Run `yarn workspace demo develop` to run the demo site

## How to develop for this repo

- Create a new branch `git checkout -b <your branch name>`
  - Make sure you first checkout the master branch and then pull the latest changes: `git checkout master` and then `git pull`
  - If you are working on an issue add the issue number to the repo name
  - Example: `git checkout -b shorter-theme-name-#2``
- Commit often as you go along `git commit -a -m <commit message>` commits all changed files.
- Push to GitHub every now and then `git push`.
- When satisfied or in need of input create a Pull Request.
  - IMPORTANT: Do not create the pull request toward Jason's repo, but this repo!
- Make sure the Pull Request is running as it should on Netlify before merging to master.
  - If there are many small "ugly" commit do a "Squash and merge" and clean up the commit message.
