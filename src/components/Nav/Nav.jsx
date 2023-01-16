import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import './Nav.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { List, Drawer,IconButton, ListItem,Box, Typography, AppBar } from '@mui/material';
import {MilitaryTech,} from '@mui/icons-material';
//import { use } from 'passport';



function Nav() {
  const user = useSelector((store) => store.user);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const subScore = useSelector((store)=> store.scoresSubmitted);
  const askScore = useSelector((store)=> store.scoresAsked);
  const goldScore = useSelector((store)=> store.scoresGold);
  const scoreKeeper = parseInt(subScore) + parseInt(askScore)*10 + parseInt(goldScore)*20;


  function medalCount(scoreKeeper){
    if (scoreKeeper < 100){
      return(<MilitaryTech sx={{color: "#FFFFFF", fontSize: "60px"}}></MilitaryTech>); 
    } else if (scoreKeeper < 250){
      return((<MilitaryTech sx={{color: "#CD7F32", fontSize: "60px"}}></MilitaryTech>));
    } else if (scoreKeeper < 500){
      return((<MilitaryTech sx={{color: "#AAA9AD", fontSize: "60px"}}></MilitaryTech>));
    } else {
      return((<MilitaryTech sx={{color: "#A48111", fontSize: "60px"}}></MilitaryTech>));
    }
  }


  return (
    <div className="nav">



      <Box display='flex' sx={{ flexGrow: 1, width:1 }}>
      
        <AppBar position="fixed" sx={{bgcolor: "#34BBFB", width:'100%'}}>
          <Drawer bgcolor='#FF0000' sx={{color:'#FF0000'}} open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
              <List className='menulist'>
                <ListItem >
                  {user.id && (
                    <>
                      <Link className="navLink" to="/user">
                        <Typography sx={{fontSize:'30px'}}>
                          Home
                        </Typography>
                      </Link>
                    </>
                  )}
                </ListItem>
                <ListItem >
                  <Link className="navLink" to="/about">
                    <Typography sx={{fontSize:'30px'}}>
                      About
                    </Typography>
                  </Link>
                </ListItem>
                <ListItem >
                  {user.id && (
                    <>
                      <Link className="navLink" to="/info">
                        <Typography sx={{fontSize:'30px'}}>
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
                        <Typography sx={{fontSize:'30px'}}>
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
                        <Typography sx={{fontSize:'30px'}}>
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
                        <Typography sx={{fontSize:'30px'}}>
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
                    <Typography sx={{mr: 1}} variant='h5'>{user.username}'s Score: {scoreKeeper}</Typography>
                  </div>
                  <div className='medal'>

                    {medalCount(scoreKeeper)}



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

