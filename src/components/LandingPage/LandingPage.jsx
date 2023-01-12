import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import { Button, Card, CardContent, Typography, Box, CardMedia, Icon, TextField } from '@mui/material';


// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">

        <div className="grid-col grid-col_4">
        <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding='5%'
        textAlign='center'
        sx={{width:'90%'} } >
        <Card sx={{width: '75%'}}>
          <CardContent>
            <Typography>hi</Typography>
          </CardContent>
        </Card>
      </Box>
    </div>





  );
}

export default LandingPage;
