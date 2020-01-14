import * as React from 'react'

import Helmet from 'react-helmet'

export const Seo = ({
  title,
  titleTemplate,
  description,
  siteURL,
  image,
  path,
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
          href: `${siteURL}/images/favicon-16x16.png`
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: `${siteURL}/images/favicon-32x32.png`
        }
      ]}
    >
      <html lang={lang} />
      <meta name="description" content={description} />
      <meta name="image" content={`${siteURL}/${image}`} />
      <meta name="image:alt" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />

      {/* Facebook */}
      {path ? (
        <meta property="og:type" content="article" />
      ) : (
        <meta property="og:type" content="website" />
      )}
      <meta property="og:title" content={formatTitleTemplate} />
      <meta property="og:url" content={`${siteURL}${path ? path : ''}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteURL}/${image}`} />
      <meta property="og:image:alt" content={description}></meta>

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={formatTitleTemplate} />
      <meta name="twitter:url" content={`${siteURL}${path ? path : ''}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteURL}/${image}`} />
      <meta name="twitter:image:alt" content={description}></meta>
      <meta name="twitter:creator" content={siteURL}></meta>
    </Helmet>
  )
}
