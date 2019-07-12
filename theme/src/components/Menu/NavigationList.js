import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

export default function NavigationList() {
  const data = useStaticQuery(graphql`
    query {
      allNavigation(sort: { fields: loadOrder, order: ASC }) {
        nodes {
          id
          route
          label
          loadOrder
        }
      }
    }
  `);

  const imageData = useStaticQuery(graphql`
    query {
      fileName: file(
        relativePath: { regex: "/(jpg)|(jpeg)|(png)/" },
        relativeDirectory: { eq: "logo" }
      ) {
        childImageSharp {
          fluid(maxWidth: 250) {
            src
          }
        }
        name
      }
    }
  `);

  const navList = data.allNavigation.nodes;

  const classes = useStyles();
  console.log('test');
  // console.log(imageData);
  return (
    <div className={classes.list}>
      <List>
        {navList.map(nav => {
          return (
            <ListItem button key={nav.route}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <Link style={{ textDecoration: 'none' }} to={`/app/${nav.route}`}>
                {`${nav.label}`}
              </Link>
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </div>
  );
}
