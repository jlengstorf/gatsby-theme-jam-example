import * as React from 'react'

import Helmet from 'react-helmet'


export const Seo = ({
  title,
  titleTemplate,
  description,
  siteURL,
  image,
  keywords = [],
  lang = 'eng'
}) => {
  const formatTitleTemplate = `${title} ${
    titleTemplate ? `| ${titleTemplate}` : ''
  }`

  return (
    <Helmet
      title={title}
      titleTemplate={formatTitleTemplate}
      link={[
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: `${`${siteURL}/images/favicon-16x16.png`}`
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: `${`${siteURL}/images/favicon-32x32.png`}`
        }
      ]}
    >
      <html lang={lang} />
      <meta name="description" content={description} />
      <meta name="image" content={`${siteURL}/images/${image ? image : ''}`} />
      <meta name="image:alt" content={description} />
      <meta
        name="gatsby-theme"
        content="@artezan/wp-gatsby-test"
      />
      <meta name="keywords" content={keywords.join(', ')} />
      {/* Facebook */}
      <meta property="og:title" content={formatTitleTemplate} />
      <meta property="og:url" content={siteURL} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`${siteURL}/images/${image ? image : ''}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content={description} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={formatTitleTemplate} />
      <meta name="twitter:url" content={siteURL} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`${siteURL}/images/${image ? image : ''}`}
      />
      <meta name="twitter:image:alt" content={description}></meta>
      <meta name="twitter:creator" content={siteURL}></meta>
    </Helmet>
  )
}
