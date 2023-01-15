import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { Button, Typography, Box} from '@mui/material';


function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />
      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding='0.5%'
        textAlign='center'
        sx={{width:'99%', marginTop:'5%'} } >
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
