import React from 'react';
//import { deepPurple,amber } from '@material-ui/core/colors';
//import { deepPurple, amber } from '@mui/material/colors';
//import { Typography } from '@material-ui/core';
import Typography from '@mui/material/Typography';
//import AppBar from '@material-ui/core/AppBar';
//import AppBar from '@mui/material/AppBar';
//import {makeStyles} from '@material-ui/core/styles';
//import { makeStyles } from '@mui/material';
//import CssBaseline from '@material-ui/core/CssBaseline';
//import CssBaseline from '@mui/material';
//import Toolbar from '@material-ui/core/Toolbar';
//import { BottomNavigationAction, Toolbar } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';



export default function Footer() {
  return (
    <>
      <BottomNavigation sx={{ position: 'fixed', bottom: 0, width: 1.0 }}>
        <Typography>©Brett R. Gebbie // Solo Project // Prime Academy</Typography>
      </BottomNavigation>
    </>
  );
}