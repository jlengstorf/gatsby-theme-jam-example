/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Navbar } from '@misk/core'
import { Link } from 'gatsby'
import React from 'react'

const asTabLinks = links =>
  links.map(({ category, href, label }) => ({
    name: label,
    slug: label,
    url_path_prefix: href,
    category: category
  }))

export default props => {
  const { home, links } = props
  const tabLinks = asTabLinks(links)

  if (typeof window !== 'undefined') {
    return (
      <Navbar
        css={css(`
          margin-bottom: 200px;
        `)}
        linkComponent={Link}
        links={tabLinks}
        homeName={home.label}
        homeUrl={home.href}
      />
    )
  } else {
    return <span />
  }
}
