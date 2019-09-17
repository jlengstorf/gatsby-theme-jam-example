import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostGrid from '../components/Grid/PostGrid';

export default function tags({
  data: {
    allMdx: { nodes: posts },
  },
  pageContext: { tag },
}) {
  console.log(tag);
  return (
    <Layout>
      <section className="padding">
        <div className="container">
          <h3 className="flex-center single-category">Category: {tag}</h3>
          <div className="blog-section__wrapper sm-col1">
            {posts.map(post => (
              <PostGrid key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const tagQuery = graphql`
  query($tag: String) {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { categories: { in: [$tag] }, published: { eq: true } }
      }
    ) {
      totalCount
      nodes {
        id
        excerpt
        frontmatter {
          title
          slug
          banner {
            sharp: childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          categories
          date(formatString: "MMMM Do, YYYY")
        }
        body
      }
    }
  }
`;
