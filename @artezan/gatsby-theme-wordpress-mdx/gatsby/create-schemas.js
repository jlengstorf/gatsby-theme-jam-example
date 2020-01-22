function CreateWpDataSchema(actions) {
  const { createTypes } = actions
  const typeDefs = `
      # ----- WP
      type MdxWpPagesWpData implements Node {
        wordpress_id: Int
        date: Date
        guid: String
        modified: Date
        slug: String
        status: String
        type: String
        link: String
        title: String
        content: String
        excerpt: String
        wordpress_parent: Int
        menu_order: Int
        comment_status: String
        ping_status: String
        template: String
        author: wordpress__wp_users
        path: String
      }
      type MdxWpPostsWpData implements Node {
        wordpress_id: Int
        date: Date
        modified: Date
        slug: String
        status: String
        type: String
        link: String
        title: String
        content: String
        excerpt: String
        comment_status: String
        sticky: Boolean
        template: String
        format: String
        id: String
        author: wordpress__wp_users
        categories: [wordpress__CATEGORY]
        featured_media: wordpress__wp_media
        path: String
        slug: String
        tags: [wordpress__TAG]
        fields: wordpress__POSTFields
      }
      type  wordpress__POSTFields {
        contentStaticImages: String
      }
      type wordpress__wp_users implements Node @infer {
        name: String
      }
      type wordpress__CATEGORY implements Node {
        id: ID!
        wordpress_id: Int
        count: Int
        description: String
        link: String
        name: String
        slug: String
        path: String
      }
      type wordpress__wp_media implements Node {
        localFile: File
      }
      type wordpress__TAG implements Node {
        id: ID!
        wordpress_id: Int
        count: Int
        description: String
        link: String
        name: String
        slug: String
        path: String
      }

      # ---- MDX
      
      type MdxFrontmatter implements Node  {
        title: String!
        icon: String
        layout: String
        sections: [String]
        section: String
        parallaxBodySpeed: Int
        headerImages: [File]
        images: [File]
        featureOrder: Int
        featureImage: File
        aboutImage: File
        date(
        difference: String
        formatString: String
        fromNow: Boolean
        locale: String
        ): Date
        tags: [String]
      }
      type MdxWordCount implements Node {
        paragraphs: Int
        sentences: Int
        words: Int
      }
      type MdxFields implements Node {
        slug: String
        sourceName: String
      }
  
    `
  createTypes(typeDefs)
}
module.exports = { CreateWpDataSchema }
