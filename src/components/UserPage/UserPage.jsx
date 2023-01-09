import React from 'react';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardContent, Typography, Box } from '@mui/material';


function UserPage() {

  const user = useSelector((store) => store.user);
  const history = useHistory();


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
            <Typography variant='h4' textAlign='center'>Your ID is: {user.id}</Typography>
          </CardContent>
          <CardContent>
            <Button variant='contained' onClick={clickHandler}>Let's Ask Some Questions!</Button>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
