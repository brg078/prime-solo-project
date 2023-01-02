import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

//MUI+CSS
import { ThemeProvider, Typography , AppBar, Toolbar, IconButton} from '@material-ui/core';
import  MenuIcon  from '@material-ui/icons/Menu';
import { useTheme } from '@emotion/react';
import './Nav.css';

function Nav() {
  const user = useSelector((store) => store.user);
  const theme = useTheme();

  return (
    <div className="nav">
      <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="secondary" component="div" >
            {/* //ADD NAV BAR OFF THIS header! */}
            <Link to="/home" color='secondary'>
              <h2 className="nav-title" color='secondary'>Asking for a Friend!</h2>
            </Link>
          </Typography>
          <Link className="navLink" to="/about">
          About
          </Link>
          {/* If a user is logged in, show these links */}
          {user.id && (
            <>
              <Link className="navLink" to="/user">
                Home
              </Link>
              <Link className="navLink" to="/info">
                Info Page
              </Link>
              <LogOutButton className="navLink" />
            </>
          )}
        </Toolbar>
      </AppBar>
      {/* <Link to="/home">
        <h2 className="nav-title">Prime Solo Project</h2>
      </Link> */}
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

      </div>
      </ThemeProvider>
    </div>
  );
}

export default Nav;
