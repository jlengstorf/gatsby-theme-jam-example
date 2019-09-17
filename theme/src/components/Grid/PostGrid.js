import React from 'react';
// import Moment from 'react-moment';
import BasicImageCard from '../Card/BasicImageCard';
// import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby';

export default function PostGrid({ frontmatter }) {
  const { banner, title, slug, date } = frontmatter;
  return (
    <>
      <div>
        <Link
          to={`${slug}`}
          // target={'_blank'}
          // style={{ textDecoration: 'none' }}
        >
          <BasicImageCard
            key={`toolCard`}
            id={title}
            title={title}
            subHeader={date}
            slug={slug}
            banner={banner}
          />
        </Link>
      </div>
    </>
  );
}
