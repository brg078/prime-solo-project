import React from 'react';
import './Footer.css';
import { AppBar, Container, ThemeProvider, Toolbar, Typography} from '@material-ui/core';
import { useTheme } from '@emotion/react';
import Paper from '@material-ui/core/Paper';
//import Paper from '@mui/material/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
//import { red } from '@material-ui/core/colors';
import BottomNavigation from '@material-ui/core/BottomNavigation';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  const theme = useTheme();


  return (
    <div className='footer'>
    <ThemeProvider theme={theme}>
    <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="secondary" component="div" >
            <h2>Asking for a Friend!</h2>
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
    </div>
  )
}

export default Footer;