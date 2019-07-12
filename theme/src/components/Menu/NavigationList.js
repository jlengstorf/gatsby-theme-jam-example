import React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

// const navList = [
//   {
//     route: 'instruction',
//     title: 'Getting Started',
//   },
//   {
//     route: 'self-confidence',
//     title: 'Self Confidence',
//   },
//   {
//     route: 'auto-suggestion',
//     title: 'Auto Suggestion',
//   },
//   {
//     route: 'miracle-equation',
//     title: 'Miracle Equation',
//   },
//   {
//     route: 'self-analysis',
//     title: 'Self Analysis',
//   },
//   {
//     route: 'miracle-morning',
//     title: 'Miracle Morning',
//   },
//   {
//     route: 'faith',
//     title: 'Faith',
//   },
//   {
//     route: 'meditation',
//     title: 'Meditation',
//   },
//   {
//     route: 'habits',
//     title: 'Habits',
//   },
// ];

export default function NavigationList({ navList }) {
  const classes = useStyles();
  return (
    <div className={classes.list}>
      <List>
        {navList.map(nav => {
          return (
            <ListItem button key={nav.route}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <Link style={{ textDecoration: "none" }} to={`/app/${nav.route}`}>
                {`${nav.title}`}
              </Link>
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </div>
  );
}
