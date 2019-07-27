import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const data = useStaticQuery(graphql`
    {
      garden(id: { eq: "gatsby-theme-digital-garden-root" }) {
        header {
          home {
            label
            href
          }
          links {
            label
            href
            category
          }
        }
        notesPath
        postsPath
        projectsPath
        projects
      }
    }
  `)

  return data.garden
}
