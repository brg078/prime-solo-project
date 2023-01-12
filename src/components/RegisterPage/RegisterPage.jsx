import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

import { Button, Card, CardContent, Typography, Box, CardMedia, Icon } from '@mui/material';
import { Star } from '@mui/icons-material';

function RegisterPage() {
  const history = useHistory();

  return (
    <div>
      <RegisterForm />
      {/* <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </button>
      </center> */}
      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding='0.5%'
        textAlign='center'
        sx={{width:'99%'} } >
        <Button
          color='secondary'
          onClick={() => {history.push('/login');}}
          variant='contained'>
          Login
        </Button>
      </Box>
      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding='0.5%'
        textAlign='center'
        sx={{width:'99%'} } >
            <Typography>Already registered? Click here to log in!</Typography>
      </Box>
    </div>
  );
}

export default RegisterPage;
