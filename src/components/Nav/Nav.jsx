import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';
import './Nav.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { List, Drawer,IconButton, ListItem, ListItemText, Box, Typography, Toolbar, AppBar } from '@mui/material';


function Nav() {
  const user = useSelector((store) => store.user);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  return (
    <div className="nav">
        {/* <AppBar position='static'>
            <Toolbar disableGutters  >
              <Typography variant="h4" component="a" noWrap href='/home'>
                ASKING FOR A FRIEND!
              </Typography>
              <Link className="navLink" to="/about">
                <Typography>
                  About
                </Typography>
              </Link>
              {user.id && (
                <>
                  <Link className="navLink" to="/user">
                    <Typography>
                      Home
                    </Typography>
                  </Link>

                  <Link className="navLink" to="/info">
                    <Typography>
                      App Info
                    </Typography>
                  </Link>
                  <LogOutButton className="navLink" />
                </>
              )}
            </Toolbar>
        </AppBar> */}


      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setIsDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" component="div">
              Asking For A Friend!
            </Typography>
            <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
              <List className='menulist'>
                <ListItem>
                  {user.id && (
                    <>
                      <Link className="navLink" to="/user">
                        <Typography>
                          Home
                        </Typography>
                      </Link>
                    </>
                  )}
                </ListItem>
                <ListItem >
                  <Link className="navLink" to="/about">
                    <Typography>
                      About
                    </Typography>
                  </Link>
                </ListItem>
                <ListItem >
                  {user.id && (
                    <>
                      <Link className="navLink" to="/info">
                        <Typography>
                          App Info
                        </Typography>
                      </Link>
                    </>
                  )}
                </ListItem>
                <ListItem >
                  {user.id && (
                    <>
                      <Link className="navLink" to="/questions">
                        <Typography>
                          Ask a Question
                        </Typography>
                      </Link>
                    </>
                  )}
                </ListItem>
                <ListItem >
                  {user.id && (
                    <>
                      <Link className="navLink" to="/questions">
                        <Typography>
                          List of Questions
                        </Typography>
                      </Link>
                    </>
                  )}
                </ListItem>
              </List>
            </Drawer>
            <LogOutButton className="navLink" />
          </Toolbar>
        </AppBar>
      </Box>  
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

