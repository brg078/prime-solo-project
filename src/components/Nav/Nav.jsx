import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';
import './Nav.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { List, Drawer,IconButton, ListItem, ListItemText, Box, Typography, Toolbar, AppBar } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import {Diversity2TwoTone, MilitaryTech,} from '@mui/icons-material';
import { height } from '@mui/system';
import { end } from '@popperjs/core';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(0,0,0,0)',
  padding: theme.spacing(1),
  height:'100%',
  color: '#FFFFFF',
  fontFamily: 'andale mono',
  fontSize: 20,
  outline: 'px',
  outlineStyle:'none',
  grid: {
    '&>.MuiDataGrid-main': {
      '&>.MuiDataGrid-columnHeaders': {
        borderBottom: 'none',
      },
    
      '& div div div div >.MuiDataGrid-cell': {
        borderBottom: 'none',
      },
  
    }},
    components: {
      MuiDataGrid: {
          styleOverrides: {
              root: {
                  border: 'none'
              }
          }
      }
  },
}

));






function Nav() {
  const user = useSelector((store) => store.user);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const subScore = useSelector((store)=> store.scoresSubmitted);
  const askScore = useSelector((store)=> store.scoresAsked);
  const goldScore = useSelector((store)=> store.scoresGold);
  const scoreKeeper = parseInt(subScore) + parseInt(askScore)*10 + parseInt(goldScore)*20;


  return (
    <div className="nav">



      <Box display='flex' sx={{ flexGrow: 1, width:1 }}>
      
        <AppBar position="fixed" sx={{bgcolor: "rgba(0,0,0,0)", width:'100%'}}>
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
            <div>
              <div className='containert'>
                <div className='containerstart'>
                  {user.access === 1 && (<>
                    <IconButton
                      size="xl"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 1, ml: 1 }}
                      onClick={() => setIsDrawerOpen(true)}
                      >
                      <MenuIcon sx={{fontSize:"40px"}}/>
                    </IconButton>
                  </>)}
                  <Typography sx={{ mt: 1}} variant="h3" component="div">Asking For A Friend!</Typography>
                </div>
                <div className='containertend'>
                  <div className='scorekeeper'>
                    <Typography sx={{mr: 1}} variant='h5'>My Score: {scoreKeeper}</Typography>
                  </div>
                  <div className='medal'>

                    {scoreKeeper >=500 &&(<MilitaryTech sx={{color: "#CD7F32", fontSize: "50px"}}></MilitaryTech>)}
                    {scoreKeeper >=100 &&(<MilitaryTech sx={{color: "#CD7F32", fontSize: "40px"}}></MilitaryTech>)}
                    {scoreKeeper >=0 &&(<MilitaryTech sx={{color: "#FFFFFF", fontSize: "60px"}}></MilitaryTech>)}


                  </div>
                  <div className='logggout'>
                    {user.id && (<><LogOutButton className="navLink" /></>) }
                  </div>

                </div>
          </div>
          </div>

        </AppBar>
        
      </Box>  
    </div>
  );
}

export default Nav;

