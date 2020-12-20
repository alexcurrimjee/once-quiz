import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    borderRadius: '2px',
    textTransform: 'none',
    marginTop: '50px',
  },
});

function TheButton(props) {
  const classes = useStyles();

  return (
    <Button {...props} disableElevation className={classes.root}>
      {props.children}
    </Button>
  );
}
export default TheButton;
