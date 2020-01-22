/**
 * Create MDX and WP Post, also allow empty posts
 */
function CreateTypeMdxWpPosts(actions, schema) {
  const { createTypes } = actions
  // resolve data see : https://www.christopherbiscardi.com/post/constructing-query-types-in-themes/
  // resolvers for MDX data
  createTypes(
    schema.buildObjectType({
      name: `MdxWpPostsMdxData`,
      fields: {
        rawBody: { type: 'String' },
        html: { type: 'String' },
        frontmatter: { type: 'MdxFrontmatter' },
        frontmatter: { type: 'MdxFrontmatter' },
        fields: { type: 'MdxFields' },
        author: { type: 'String' },
        body: {
          type: 'String!',
          resolve(source, args, context, info) {
            const type = info.schema.getType(`Mdx`)
            const root = context.nodeModel.findRootNodeAncestor(source)
            const mdxNode = context.nodeModel.getNodeById({
              id: source.id
            })
            const resolver = type.getFields()['body'].resolve
            return resolver(mdxNode, {}, context, {
              fieldName: 'body'
            })
          }
        },
        timeToRead: {
          type: 'Int',
          resolve(source, args, context, info) {
            const type = info.schema.getType(`Mdx`)
            const mdxNode = context.nodeModel.getNodeById({
              id: source.id
            })
            const resolver = type.getFields()['timeToRead'].resolve
            return resolver(mdxNode, {}, context, {
              fieldName: 'timeToRead'
            })
          }
        },
        wordCount: {
          type: 'MdxWordCount',
          resolve(source, args, context, info) {
            const type = info.schema.getType(`Mdx`)
            const mdxNode = context.nodeModel.getNodeById({
              id: source.id
            })
            const resolver = type.getFields()['wordCount'].resolve
            return resolver(mdxNode, {}, context, {
              fieldName: 'wordCount'
            })
          }
        },
        excerpt: {
          type: 'String!',
          resolve: async (source, args, context, info) => {
            const type = info.schema.getType(`Mdx`)
            const mdxNode = context.nodeModel.getNodeById({
              id: source.id
            })
            const resolver = type.getFields()['excerpt'].resolve
            const excerpt = await resolver(
              mdxNode,
              { pruneLength: 140 },
              context,
              {
                fieldName: 'excerpt'
              }
            )
            return excerpt
          }
        }
      },
      interfaces: [`Node`]
    })
  )
  // resolvers for WP post data
  createTypes(
    schema.buildObjectType({
      name: `MdxWpPostsWpData`,
      fields: {
        content: {
          type: 'String!',
          resolve: async (source, args, context, info) => {
            // This is for inline images
            const wpNode = context.nodeModel.getNodeById({
              id: source.id
            })
            return wpNode.content
          }
        },
        excerpt: {
          type: 'String',
          resolve: async (source, args, context, info) => {
            // This is for inline images
            const wpNode = context.nodeModel.getNodeById({
              id: source.id
            })
            const str = `${wpNode.excerpt
              .replace(/<[^>]+>/g, '')
              .substring(0, 140)}...`
            return str
          }
        }
      },
      interfaces: [`Node`]
    })
  )

  // resolvers for WP Page data
  createTypes(
    schema.buildObjectType({
      name: `MdxWpPagesWpData`,
      fields: {
        content: {
          type: 'String!',
          resolve: async (source, args, context, info) => {
            // This is for inline images
            const wpNode = context.nodeModel.getNodeById({
              id: source.id
            })
            return wpNode.content
          }
        },
        excerpt: {
          type: 'String',
          resolve: async (source, args, context, info) => {
            // This is for inline images
            const wpNode = context.nodeModel.getNodeById({
              id: source.id
            })
            const str = `${wpNode.excerpt
              .replace(/<[^>]+>/g, '')
              .substring(0, 140)}...`
            return str
          }
        }
      },
      interfaces: [`Node`]
    })
  )
  // types for MdxWpPosts
  createTypes(
    schema.buildObjectType({
      name: `MdxWpPosts`,
      fields: {
        id: { type: `ID!` },
        type: { type: 'String' },
        postId: { type: 'String' },
        date: { type: 'Date' },
        wpData: { type: 'MdxWpPostsWpData' },
        mdxData: { type: 'MdxWpPostsMdxData' }
      },
      interfaces: [`Node`]
    })
  )

  // types for MdxWpPages

  createTypes(
    schema.buildObjectType({
      name: `MdxWpPages`,
      fields: {
        id: { type: `ID!` },
        type: { type: 'String' },
        date: { type: 'Date' },
        wpData: { type: 'MdxWpPagesWpData' }
        // mdxData: { type: 'MdxWpPagesMdxData' }
      },
      interfaces: [`Node`]
    })
  )
}

module.exports = { CreateTypeMdxWpPosts }
