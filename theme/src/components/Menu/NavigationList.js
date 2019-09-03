import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Divider from '@material-ui/core/Divider';
import getSlugList from '../../hooks/slugList';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

export default function NavigationList() {
  const navList = getSlugList();
  let navs = [];
  let navObject = null;
  navList.allMdx.nodes.map(node => {
    navObject = {
      route: node.frontmatter.slug,
      label: node.frontmatter.label,
    };
    navs.push(navObject);
  });

  console.log(navs);
  const classes = useStyles();
  return (
    <div className={classes.list}>
      <List>
        {navs.map((nav, index) => {
          return (
            <ListItem button key={index}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <Link style={{ textDecoration: 'none' }} to={`${nav.route}`}>
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
