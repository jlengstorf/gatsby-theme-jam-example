import React from "react"
import BasicImageCard from "../Card/BasicImageCard"

export default function ToolsGrid({ frontmatter }) {
  const { banner, title, slug, date } = frontmatter
  return (
    <>
      <div>
        <a
          href={`https:/${slug}`}
          target={"_blank"}
          style={{ textDecoration: "none" }}
        >
          <BasicImageCard
            key={`toolCard`}
            id={title}
            title={title}
            subHeader={date}
            slug={slug}
            banner={banner}
          />
        </a>
      </div>
    </>
  )
}
