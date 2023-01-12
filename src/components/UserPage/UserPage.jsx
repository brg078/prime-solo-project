import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardContent, Typography, Box, CardMedia, Icon } from '@mui/material';
import { Star, MilitaryTech,} from '@mui/icons-material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function UserPage() {

  const user = useSelector((store) => store.user);
  const subScore = useSelector((store)=> store.scoresSubmitted);
  const askScore = useSelector((store)=> store.scoresAsked);
  const goldScore = useSelector((store)=> store.scoresGold);
  const scoreKeeper = parseInt(subScore) + parseInt(askScore)*10 + parseInt(goldScore)*20;
  const history = useHistory();
  const dispatch = useDispatch();


  useEffect(() => {
  loadSubmitted();
  loadAsked();
  loadGoldStar();
  scoreTracker();
  }, []);


  function scoreTracker(){

  }


  function loadSubmitted(){
    console.log('in loadSubmitted', user.id);
    dispatch({type: 'FETCH_SUBMITTED', payload: user.id})
  }


  function loadAsked(){
    console.log('in loadAsked', user.id);
    dispatch({type: 'FETCH_ASKED', payload: user.id});
  }


  function loadGoldStar(){
    console.log('inloadGoldStar', user.id);
    dispatch({type: 'FETCH_GOLDSTARS', payload: user.id});
  }


  function clickHandler(){
    console.log('to questions page clickhandler');
    history.push('/questions');
  }



  return (
    <div className="container">
      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding='5%'
        textAlign='center'
        sx={{width:'90%'} } >
        <Card sx={{width: '75%'}}>
          <CardContent>
            {/* <Star sx={{fontSize: "150px"}} color='secondary'></Star> */}
            <Typography padding='1%' variant='h4' textAlign='center' >Welcome,</Typography>
            <Typography padding='2%' variant='h2' textAlign='center' >{user.username}!</Typography>
            {user.access ===1 && (<Typography variant='h4' padding='1%'>Admin Account</Typography>)}
            <Typography variant='h4' textAlign='center' padding='2%'>Your score is: {scoreKeeper} points! </Typography>
            {scoreKeeper >=100 &&(<Typography variant='h5'>Level: Bronze AKA Good Friend</Typography>)}
            {scoreKeeper >=100 &&(<MilitaryTech sx={{color: "#CD7F32", fontSize: "75px"}}></MilitaryTech>)}
            {scoreKeeper >=100 &&(<EmojiEventsIcon sx={{color: "#CD7F32", fontSize: "150px"}}></EmojiEventsIcon>)}
            {scoreKeeper >=100 &&(<MilitaryTech sx={{color: "#CD7F32", fontSize: "75px"}}></MilitaryTech>)}
            {scoreKeeper >=100 &&(<Typography variant='h6'>Next Level: Silver AKA Great Friend (500 Points)</Typography>)}

            
            <Typography variant='h4' textAlign='center'># of questions you have submitted: {subScore}.</Typography>
            <Typography variant='h4' textAlign='center'># of Gold Star questions you have submitted: {goldScore}.</Typography>
            <Typography variant='h4' textAlign='center'># of times you have answered for a friend {askScore}.</Typography>
          </CardContent>
          <CardContent>
            <Button color='secondary' variant='contained' onClick={clickHandler}>Let's Ask Some Questions!</Button>
          </CardContent>
        </Card>
      </Box>
      {/* <Box>
        <p>{JSON.stringify(user)}</p>
        <p></p>
      </Box> */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
