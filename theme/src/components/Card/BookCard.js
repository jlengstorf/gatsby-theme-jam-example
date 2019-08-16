import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';

// import miracleEquation from '../../images/miracle-equation.jpg';
// import thinkAndGrow from '../../images/think-and-grow-rich.jpg';

const styles = theme => ({
  card: {
    maxWidth: 400,
    minHeight: '225px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class BookCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          title={this.props.title}
        subheader={this.props.subHeader}
        />
        {/*<CardMedia
          className={classes.media}
          image={miracleEquation}
          title="Miracle Equation"
          style={{objectFit: 'cover'}}
        />
        */}
        <CardContent>
          <Typography component="p" style={{fontSize: 20}}>
            {this.props.author}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

BookCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookCard);