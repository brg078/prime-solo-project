import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { Button, Card, CardContent, Typography, Box, TextField } from '@mui/material';


function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding='5%'
      textAlign='center'
      sx={{width:'90%', marginTop: '3%'} }>
    <Card sx={{width: '75%',backgroundColor: '#F0F8FF'}}>
    <CardContent>
      <Typography>User Login</Typography>
      {errors.registrationMessage && (
        <Typography className="alert" role="alert">
          {errors.loginMessage}
        </Typography>
        )}
    </CardContent>
    <CardContent>
      <TextField            
        type="text"
        name="username"
        value={username}
        required
        onChange={(event) => setUsername(event.target.value)}>
      </TextField>
    </CardContent>
    <CardContent>
      <TextField            
        type="password"
        name="password"
        value={password}
        required
        onChange={(event) => setPassword(event.target.value)}>
      </TextField>
    </CardContent>
    <CardContent>
      <Button
      variant='contained'
      color='secondary'
      className="btn"
      type="submit"
      name="submit"
      value="Register"
      onClick={login}>
        Login
      </Button>
    </CardContent>
    </Card>
    </Box>
    </>
  );
}

export default LoginForm;
