import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin: theme.spacing(2),
  },
});

function LoadingProgress(props) {
  const { classes } = props;
  return (
    <div>
      <CircularProgress className={classes.progress} />
    </div>
  );
}

LoadingProgress.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadingProgress);
