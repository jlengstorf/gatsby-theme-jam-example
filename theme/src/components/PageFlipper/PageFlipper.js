import React from "react"
import { Link, navigate } from "gatsby"
import useArrowNavigation from './useArrowNavigation';
import useSwipeNavigation from './useSwipeNavigation';

const PageFlipper = ({ nextPage, previousPage }) => {
  useArrowNavigation({ nextPage, previousPage }, navigate);
  useSwipeNavigation({ nextPage, previousPage}, navigate);

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
          <Link to={`${previousPage}`} rel="prev">
            ← {previousPage}
          </Link>
        )}
      </li>
      <li>
        {nextPage && (
          <Link to={`${nextPage}`} rel="next">
            {nextPage} →
          </Link>
        )}
      </li>
    </ul>
  )
}

export default PageFlipper
