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

export default function NavigationList(props) {
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

  const navList = props.slugs;
  // console.log(props);
  const classes = useStyles();
  return (
    <div className={classes.list}>
      <List>
        {navList.map(nav => {
          return (
            <ListItem button key={nav}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <Link style={{ textDecoration: 'none' }} to={`${nav}`}>
                {`Test`}
              </Link>
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </div>
  );
}
