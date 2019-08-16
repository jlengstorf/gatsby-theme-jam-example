import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Img from 'gatsby-image';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
  card: {
    minWidth: 350,
    minHeight: 350,
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
  banner: {
    '&::after': {
      content: '',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0.7,
    },
    '& > *': {
      zIndex: 100,
    },
  },
});

class BasicImageCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader title={this.props.title} subheader={this.props.subHeader} />
        <CardContent>
          <CardMedia>
            {/* <Img
              className="img-responsive blog__img"
              fluid={this.props.banner.sharp.fluid}
              style={{ height: 200, width: 400 }}
              alt={this.props.title}
            /> */}
          </CardMedia>
          <Typography component="p">
            {this.props.content ? this.props.content : ''}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

BasicImageCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicImageCard);
