import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { ThemeProvider, withStyles} from '@material-ui/core';
import { useTheme } from '@emotion/react';
import './Nav.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { amber,deepPurple } from '@mui/material/colors';
import { red } from '@material-ui/core/colors';


const AmberTextTypography = withStyles({
  root: {
    color: amber[500],
    letterSpacing: '0.2rem',
    textDecoration: 'none',
    // outline: '1px',
    // outlineColor: 'white',
    padding: '1rem'

  }
})(Typography);


function Nav() {
  const user = useSelector((store) => store.user);
  const theme = useTheme();


  return (
    <div className="nav">
        <AppBar position='static'>
          <Container maxWidth="xl" sx={{bgcolor:deepPurple[500]}}>
            <Toolbar disableGutters  >


              <AmberTextTypography variant="h4" component="a" noWrap href='/home'>
                ASKING FOR A FRIEND!
              </AmberTextTypography>
              <AmberTextTypography variant="h6" component="a" noWrap href='/home'>
                HOME
              </AmberTextTypography>
              <AmberTextTypography variant="h6" component="a" noWrap href='/info'>
                INFO
              </AmberTextTypography>
              <AmberTextTypography className='navLink' variant="h6" component="a" noWrap href='/about'>
                ABOUT
              </AmberTextTypography>
              <AmberTextTypography className='navLink' variant="h6" component="a" noWrap href='/info'>
                LOGOUT
              </AmberTextTypography>


              <Link className="navLink" to="/about">
                  About
              </Link>
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
          </Container>
        </AppBar>
    </div>
  );
}

export default Nav;


//               // {/* If a user is logged in, show these links */}
// <Link className="navLink" to="/about" sx={{color: amber}} >
//                   About
//                 </Link>
//                 {user.id && (
//                   <>
//                     <Link className="navLink" to="/user">
//                       Home
//                     </Link>
//                     <Link className="navLink" to="/info">
//                       Info Page
//                     </Link>
//                     <LogOutButton className="navLink" />
//                   </>
// )}







// {/* <div>
// {/* If no user is logged in, show these links */}
// {!user.id && (
//   // If there's no user, show login/registration links
//   <Link className="navLink" to="/login">
//     Login / Register
//   </Link>
// )}

// </div> */}


{/* <Link className="navLink" to="/about">
About
</Link> */}

