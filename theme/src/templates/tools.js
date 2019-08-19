import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import Img from 'gatsby-image';

export default function Tools({ data: { mdx: post } }) {
  const { banner, title, date, categories } = post.frontmatter;
  return (
    <Layout>
      <div className="post-single-container">
        <article className="post-single">
          <header>
            <h1 className="post-single__title">{title}</h1>
            <div className="blog__details flex-start">
              <span>{date}</span>
              {/* {categories.map((category, index) => (
                <Link key={index} to={`/tags/${category}`}>
                  <span className="tag">{category}</span>
                </Link>
              ))} */}
            </div>
            <Img
              fluid={banner.sharp.fluid}
              alt={title}
              style={{ height: 600, width: '100vw' }}
            />
          </header>
          <MDXRenderer>{post.body}</MDXRenderer>
        </article>
        {/* <div className="blog__details flex-start">
          {categories &&
            categories.map((category, index) => (
              <Link key={index} className="tag" to={`/tags/${category}`}>
                {category}
              </Link>
            ))}
        </div> */}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        categories
        banner {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      body
    }
  }
`;
