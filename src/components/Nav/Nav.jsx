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



      <Box display='flex' sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
          {user.access === 1 && (<>
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
            </>)}
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
                      <Link className="navLink" to="/list">
                        <Typography>
                          List of Questions
                        </Typography>
                      </Link>
                    </>
                  )}
                </ListItem>
                <ListItem >
                  {user.id && (
                    <>
                      <Link className="navLink" to="/flagged">
                        <Typography>
                          Student Question History
                        </Typography>
                      </Link>
                    </>
                  )}
                </ListItem>
              </List>
            </Drawer>
            {user.id && (<><LogOutButton className="navLink" /></>) }
          </Toolbar>
        </AppBar>
      </Box>  
    </div>
  );
}

export default Nav;

