import React from 'react';
import Moment from 'react-moment';
import BasicImageCard from '../Card/BasicImageCard';
import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby';

export default function ToolsGrid({ excerpt, frontmatter }) {
  const { banner, title, slug, date } = frontmatter;
  console.log(date);
  return (
    <>
      <div>
        <Link to={slug} style={{ textDecoration: 'none' }}>
          <BasicImageCard
            key={`toolCard`}
            id={title}
            title={title}
            subHeader={date}
            slug={slug}
            banner={banner}
          />
          {/* <Grid item xs={12} sm={6} md={4} lg={4} key={`toolsContainer-2`}>
              <BasicImageCard
                key={`toolCard_1`}
                id={`${title}_1`}
                title={title}
                subHeader={date}
                slug={slug}
                banner={banner}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} key={`toolsContainer-3`}>
              <BasicImageCard
                key={`toolCard_2`}
                id={`${title}_2`}
                title={title}
                subHeader={date}
                slug={slug}
                banner={banner}
              />
            </Grid> */}
        </Link>
      </div>
    </>
  );
}
