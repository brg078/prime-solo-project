import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { Button, Card, CardContent, Typography, Box, CardMedia, Icon, TextField } from '@mui/material';


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
    {/* <form className="formPanel" onSubmit={login}>
      <h2>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Log In" />
      </div>
    </form> */}
    <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  padding='5%'
  textAlign='center'
  sx={{width:'90%'} }>
  <Card sx={{width: '75%'}}>
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
