import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardContent, Typography, Box, CardMedia, Icon } from '@mui/material';


function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />
{/* 
      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
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
          type="button"
          className="btn btn_asLink"
          onClick={() => {history.push('/registration');}}
          variant='contained'>
          Register
        </Button>
      </Box>
      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding='0.5%'
        textAlign='center'
        sx={{width:'99%'} } >
            <Typography>Not registered yet? Click here to get registered!</Typography>
      </Box>
    </div>
  );
}

export default LoginPage;
