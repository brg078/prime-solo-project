import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardContent, Typography, Box } from '@mui/material';


function UserPage() {

  const user = useSelector((store) => store.user);
  const subScore = useSelector((store)=> store.scoresSubmitted);
  //const subScoreDom = JSON.stringify(subScore);
  const askScore = useSelector((store)=> store.scoresAsked);
  //const askScoreDom = JSON.stringify(askScore);
  const history = useHistory();
  const dispatch = useDispatch();


  useEffect(() => {
  loadSubmitted();
  loadAsked();
  }, []);


  function loadSubmitted(){
    //console.log('in loadSubmitted');
    dispatch({type: 'FETCH_SUBMITTED'})
  }


  function loadAsked(){
    //console.log('in loadAsked');
    dispatch({type: 'FETCH_ASKED'});
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
        <Card sx={{width: '50%'}}>
          <CardContent>
            <Typography padding='1%' variant='h4' textAlign='center' >Welcome,</Typography>
            <Typography padding='1%' variant='h2' textAlign='center' >{user.username}!</Typography>
            <Typography variant='h4' textAlign='center'>Your score is: XXX </Typography>
            <Typography variant='h4' textAlign='center'>You have submitted: {subScore} questions.</Typography>
            <Typography variant='h4' textAlign='center'>You have asked for a friend {askScore} times!</Typography>
          </CardContent>
          <CardContent>
            <Button variant='contained' onClick={clickHandler}>Let's Ask Some Questions!</Button>
          </CardContent>
        </Card>
                    {/* <Typography variant='h4' textAlign='center'>Your ID is: {user.id}</Typography> */}
      </Box>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
