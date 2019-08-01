// import React from 'react';

// import Posts from '../components/posts';

// export default ({
//   pathContext: { posts, siteTitle, socialLinks },
//   location,
// }) => (
//   <Posts
//     location={location}
//     posts={posts}
//     siteTitle={siteTitle}
//     socialLinks={socialLinks}
//   />
// );

import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
export default function PageTemplate({ data: { mdx } }) {
  return (
    <div>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </div>
  );
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;
