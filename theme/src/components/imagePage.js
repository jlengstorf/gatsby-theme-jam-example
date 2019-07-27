import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import PageFlipper from "./pageFlipper"
import SEO from "./seo"

const Page = ({ title, imageFile, nextPage, previousPage }) => {
  return (
    <>
      <SEO title={title} />

      <PageFlipper nextPage={nextPage} previousPage={previousPage} />

      <Img fluid={imageFile.childImageSharp.fluid} />
    </>
  )
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  imageFile: PropTypes.object,
  nextPage: PropTypes.shape({
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  previousPage: PropTypes.shape({
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
}

export default Page
