import React from 'react';
import './Footer.css';
import { AppBar, Container, ThemeProvider, Typography} from '@material-ui/core';
import { useTheme } from '@emotion/react';
//import Paper from '@material-ui/Paper';
//import Paper from '@mui/material/Paper';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  const theme = useTheme();


  return (
    <ThemeProvider theme={theme}>
      {/* <Paper sx={{
          width: '100%',
          position: 'fixed',
          bottom: 0,
          width: '100%',
          }}>
          <Container sx={{
          color: 'primary'

          }}> */}
            <AppBar sx={{
              // width: '90%',
              // position: 'fixed',
              // bottom: 0,
              }}>
              &copy; Prime Digital Academy
            </AppBar>
          {/* </Container>
      </Paper> */}
    </ThemeProvider>
  )
}

export default Footer;


//marginTop: 'calc(10% + 60px)',