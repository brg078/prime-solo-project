import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardContent, Typography, Box, CardMedia, Icon, TextField } from '@mui/material';


function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    
    
    <>
    {/* <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
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
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
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
      <Typography>Register User</Typography>
      {errors.registrationMessage && (
        <Typography className="alert" role="alert">
          {errors.registrationMessage}
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
      onClick={registerUser}>
        Register
      </Button>
    </CardContent>
  </Card>
</Box>
    </>
  );
}

export default RegisterForm;
