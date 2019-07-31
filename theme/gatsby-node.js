exports.createPages = async ({ actions, graphql, reporter }) => {
  const basePath = "/"
  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/tasting-notes.js"),
  })
  const result = await graphql(`
    query {
      allTastingNote(sort: { fields: name, order: ASC }) {
        nodes {
          id
          slug
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panic("error loading tasting notes", result.errors)
    return
  }
  const tastingNotes = result.data.allTastingNote.nodes
  tastingNotes.forEach(tastingNote => {
    const slug = tastingNote.slug
    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/tasting-note.js"),
      context: {
        tastingNoteID: tastingNote.id,
      },
    })
  })
}

const fs = require("fs")
// Make sure the data directory exists
exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = "data"
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }
}
// Define the "TastingNote" type
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type TastingNote implements Node @dontInfer {
      id: ID!
      brand: String!
      date: Date! @dateformat @proxy(from: "date")
      finish: String!
      name: String!
      nose: String!
      strength: Float!
      taste: String!
      type: String!
      slug: String!
    }
  `)
}
// Define resolvers for custom fields
exports.createResolvers = ({ createResolvers }) => {
  const basePath = "/"
  // Quick-and-dirty helper to convert strings into URL-friendly slugs.
  const slugify = str => {
    const slug = str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "")
    return `/${basePath}/${slug}`.replace(/\/\/+/g, "/")
  }
  createResolvers({
    TastingNote: {
      slug: {
        resolve: source => slugify(source.name),
      },
    },
  })
}
