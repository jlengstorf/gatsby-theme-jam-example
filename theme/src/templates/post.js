import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import Img from 'gatsby-image';

export default function Post({ data: { mdx: post } }) {
  const { banner, title, date } = post.frontmatter;
  return (
    <Layout>
      <div className="post-single-container">
        <article className="post-single">
          <header>
            {banner ? (
              <Img
                fluid={banner.sharp.fluid}
                alt={title}
                style={{ height: '50vh', width: '100vw', textAlign: 'center' }}
              />
            ) : null}
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            <div style={{ textAlign: 'center' }}>
              <span>{date}</span>
            </div>
          </header>
          <div style={{ textAlign: 'justify', padding: 20 }}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>
        </article>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        banner {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        date(formatString: "MMMM Do, YYYY")
      }
      body
    }
  }
`;
