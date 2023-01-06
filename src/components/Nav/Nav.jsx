import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { ThemeProvider, withStyles} from '@material-ui/core';
import { useTheme } from '@emotion/react';
import './Nav.css';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';

import { amber,deepPurple,cyan } from '@mui/material/colors';




const AmberTextTypography = withStyles({
  root: {
    color: amber[500],
    letterSpacing: '0.2rem',
    textDecoration: 'none',
    padding: '1rem',
    '&:hover': {backgroundColor: deepPurple[600], color: cyan[400] },
    '&:active': {transform: "scale3d(1.05, 1.05, 1)"}

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
              <Link className="navLink" to="/about">
                <AmberTextTypography>
                  About
                </AmberTextTypography>
              </Link>
              {user.id && (
                <>
                  <Link className="navLink" to="/user">
                    <AmberTextTypography>
                      Home
                    </AmberTextTypography>
                  </Link>

                  <Link className="navLink" to="/info">
                    <AmberTextTypography>
                      App Info
                    </AmberTextTypography>
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

