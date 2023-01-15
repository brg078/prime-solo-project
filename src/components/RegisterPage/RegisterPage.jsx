import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

import { Button, Typography, Box} from '@mui/material';

function RegisterPage() {
  const history = useHistory();

  return (
    <div>
      <RegisterForm />
      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding='0.5%'
        textAlign='center'
        sx={{width:'99%', marginTop:'5%'} } >
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
