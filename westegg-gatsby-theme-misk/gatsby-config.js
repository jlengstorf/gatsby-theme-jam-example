module.exports = options => {
  const {
    header = {
      home: {
        href: '/',
        label: 'Westegg Misk'
      },
      links: [
        {
          href: '/notes',
          label: 'Themes',
          category: 'Primary'
        }
      ]
    },
    mdx = true,
    mdxLayouts = {},
    notes = 'notes',
    notesPath = '/notes',
    posts,
    postsPath,
    projects,
    projectsPath,
    siteMetadata = {
      title: 'Westegg Misk'
    }
  } = options

  const plugins = []

  /**
   * Gatsby Themes
   */
  plugins.push({
    resolve: '@westegg/gatsby-theme-digital-garden',
    options: {
      header,
      mdx,
      mdxLayouts,
      notes,
      notesPath,
      posts,
      postsPath,
      projects,
      projectsPath
    }
  })

  return {
    siteMetadata,
    plugins
  }
}
