/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { Card } from '../Card'
import { CardList } from '../CardList'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export const Posts = ({
  allMdxWpPosts,
  numOfPosts,
  lastedFirst = true,
  ...rest
}) => {
  const { nodes: posts } = allMdxWpPosts
  // Map all posts
  let allPosts = posts.map(post => {
    const { mdxData, wpData, date } = post
    if (post.type === 'MDX') {
      return {
        excerpt: `${mdxData.excerpt}`,
        slug: mdxData.fields.slug,
        timeToRead: mdxData.timeToRead,
        wordCount: mdxData.wordCount.words,
        date,
        tags: mdxData.frontmatter.tags,
        title: mdxData.frontmatter.title,
        featuredImage: mdxData.frontmatter.featureImage
      }
    } else {
      return {
        excerpt: `${wpData.excerpt}`,
        slug: wpData.slug,
        date,
        tags: wpData.tags,
        title: wpData.title,
        featuredImage: wpData.featured_media
      }
    }
  })
  if (!lastedFirst) {
    const c = new Date().getTime()
    allPosts.sort((a, b) => new Date(a.date || c) - new Date(b.date || c))
  }
  if (numOfPosts) {
    allPosts = allPosts.slice(0, numOfPosts)
  }

  return <CardList {...rest} listItems={allPosts} />
}
