import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardContent, Typography, Box} from '@mui/material';
import { MilitaryTech} from '@mui/icons-material';
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
  }, []);


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

  function medalCount(score){
    if (scoreKeeper < 100){
      return(
        <>
        <Typography variant='h5'>Level: New Friend</Typography>
        <MilitaryTech sx={{color: "#FFFFFF", fontSize: "60px"}}></MilitaryTech>
        <Typography variant='h6'>Next Level: Bronze AKA Good Friend (100 Points)</Typography>
        </>
      ); 
    } else if (scoreKeeper < 250){
      return(
        <>
        <Typography variant='h5'>Level: Bronze AKA Good Friend</Typography>
        <MilitaryTech sx={{color: "#CD7F32", fontSize: "75px"}}></MilitaryTech>
        <EmojiEventsIcon sx={{color: "#CD7F32", fontSize: "150px"}}></EmojiEventsIcon>
        <MilitaryTech sx={{color: "#CD7F32", fontSize: "75px"}}></MilitaryTech>
        <Typography variant='h6'>Next Level: Silver AKA Great Friend (250 Points)</Typography>
        </>
      );
    } else if (scoreKeeper < 500){
      return(
        <>
        <Typography variant='h5'>Level: Silver AKA Great Friend</Typography>
        <MilitaryTech sx={{color: "#AAA9AD", fontSize: "75px"}}></MilitaryTech>
        <EmojiEventsIcon sx={{color: "#AAA9AD", fontSize: "150px"}}></EmojiEventsIcon>
        <MilitaryTech sx={{color: "#AAA9AD", fontSize: "75px"}}></MilitaryTech>
        <Typography variant='h6'>Next Level: Gold AKA Best Friend (500 Points)</Typography>
        </>
      );
    } else {
      return(

        <>
        <Typography variant='h5'>Level: Gold AKA Best Friend</Typography>
        <MilitaryTech sx={{color: "#A48111", fontSize: "75px"}}></MilitaryTech>
        <EmojiEventsIcon sx={{color: "#A48111", fontSize: "150px"}}></EmojiEventsIcon>
        <MilitaryTech sx={{color: "#A48111", fontSize: "75px"}}></MilitaryTech>
        <Typography variant='h6'>Next Level: Platinum AKA BFF! (1000 Points)</Typography>
        </>
      )
      
      
      
      
      
      
      
    }




  }

  return (
    <div className="container">
      <Box 
        display="flex"
        marginTop='5%'
        justifyContent="center"
        alignItems="center"
        padding='5%'
        textAlign='center'
        sx={{width:'90%'} } >
        <Card sx={{width: '75%', backgroundColor:'#F0F8FF'}}>
          <CardContent>
            <Typography padding='1%' variant='h4' textAlign='center' >Welcome,</Typography>
            <Typography padding='2%' variant='h2' textAlign='center' >{user.username}!</Typography>
            {user.access ===1 && (<Typography variant='h4' padding='1%'>Admin Account</Typography>)}
            <Typography variant='h4' textAlign='center' padding='2%'>Your score is: {scoreKeeper} points! </Typography>

            <div>
              {medalCount(scoreKeeper)}
            </div>
            
            <Typography variant='h4' textAlign='center'># of questions you have submitted: {subScore}.</Typography>
            <Typography variant='h4' textAlign='center'># of Gold Star questions you have submitted: {goldScore}.</Typography>
            <Typography variant='h4' textAlign='center'># of times you have answered for a friend {askScore}.</Typography>
          </CardContent>
          <CardContent>
            <Button color='secondary' variant='contained' onClick={clickHandler}>Let's Ask Some Questions!</Button>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
