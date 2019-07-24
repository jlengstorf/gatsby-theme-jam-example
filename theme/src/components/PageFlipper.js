import React from "react"

import { Link, navigate } from "gatsby"

class PageFlipper extends React.Component {
  handleKeyStroke = e => {
    const { nextPage, previousPage } = this.props

    if (e.keyCode === 37) {
      navigate(previousPage)
    }

    if (e.keyCode === 39) {
      navigate(nextPage)
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyStroke)
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyStroke)
  }

  render() {
    const { nextPage, previousPage } = this.props

    return (
      <ul
        style={{
          background: `pink`,
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,

          margin: 0,
          marginBottom: 0,
        }}
      >
        <li>
          {previousPage && (
            <Link to={`/${previousPage}`} rel="prev">
              ← {previousPage}
            </Link>
          )}
        </li>
        <li>
          {nextPage && (
            <Link to={`/${nextPage}`} rel="next">
              {nextPage} →
            </Link>
          )}
        </li>
      </ul>
    )
  }
}

export default PageFlipper

// const PageFlipper = ({ file }) => {
//   //   const { file } = this.props.data
//   //   const currentPage = file.name

//   const currentPage = "5"

//   const prevPage = currentPage - 1 === 0 ? "/" : (currentPage - 1).toString()

//   const prevPageLink = (currentPage - 1).toString()

//   var conCurrentPage = Number(currentPage)
//   const nextPage = (conCurrentPage + 1).toString()
//   const nextPageLink = (conCurrentPage + 1).toString()

//   return (
//     <div>
//       <Layout>
//         <h3 className="pageNumberProp">
//           <span>{this.props.pageNumberProp}</span>
//         </h3>
//         <ul
//           style={{
//             background: `pink`,
//             display: `flex`,
//             flexWrap: `wrap`,
//             justifyContent: `space-between`,
//             listStyle: `none`,

//             margin: 0,
//             marginBottom: 0,
//           }}
//         >
//           <li>
//             {prevPage && (
//               <Link to={`/${prevPage}`} rel="prev">
//                 ← {prevPageLink}
//               </Link>
//             )}
//           </li>
//           <li>
//             {nextPage && (
//               <Link to={`/${nextPage}`} rel="next">
//                 {nextPageLink} →
//               </Link>
//             )}
//           </li>
//         </ul>
//       </Layout>
//     </div>
//   )
// }

// export default PageFlipper
