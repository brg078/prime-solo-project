import React from 'react';
import { deepPurple,amber } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    color: amber[500],
    background: deepPurple[500],
    //border: 'blue'
  },
  typo: {
    flexGrow: 1,
    textAlign: "center"
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    
    <React.Fragment>
      <CssBaseline/>
      <AppBar className={classes.appBar} >
        <Toolbar>
          <Typography className={classes.typo}>
            Asking for a friend!
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
    
  );
}