/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled } from 'theme-ui'
import { Card } from '../Card'

export const Posts = ({ allMdxWpPosts }) => {
  const { nodes: posts } = allMdxWpPosts
  console.log(posts)
  return (
    <>
      {posts.length &&
        posts.map((post, index) => {
          if (post.type === 'MDX') {
            const { mdxData } = post
            const strExcerpt = mdxData.excerpt.substring(0, 30)
            return (
              <div key={index}>
                <Card
                  excerpt={strExcerpt}
                  timeToRead={mdxData.timeToRead}
                  wordCount={mdxData.wordCount.words}
                  date={post.date}
                  tags={mdxData.frontmatter.tags}
                  title={mdxData.frontmatter.title}
                  featuredImage={mdxData.frontmatter.featuredImage}
                />
              </div>
            )
          } else {
            const { wpData } = post
            const strExcerpt = wpData.excerpt.substring(0, 30)
            return (
              <div key={index}>
                <Card
                  excerpt={strExcerpt}
                  date={post.date}
                  tags={wpData.tags}
                  title={wpData.title}
                  featuredImage={wpData.featured_media}
                />
              </div>
            )
          }
        })}
    </>
  )
}
