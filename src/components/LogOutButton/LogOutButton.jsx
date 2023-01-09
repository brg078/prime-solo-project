import React from 'react';
import { useDispatch } from 'react-redux';
//import { Button, Typography } from '@material-ui/core';
import  Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//import { amber, deepPurple, cyan } from '@material-ui/core/colors';
import { amber, deepPurple, cyan } from '@mui/material/colors';
//import { withStyles} from '@material-ui/core';
import { DoNotTouchRounded, SocialDistance } from '@mui/icons-material';


// const StyledButton = withStyles({
//   root: {
//     backgroundColor:amber[500],
//     color: cyan[500],

//     '&:hover': {backgroundColor: amber[100], },
//     '&:active': {transform: "scale3d(1.05, 1.05, 1)"}
//   }
// })(Button);

// const StyledTypo = withStyles({
//   root: {
//     color: amber[500],
//     letterSpacing: '0.2rem',
//     textDecoration: 'none',
//     padding: '1rem',
//     '&:hover': {backgroundColor: deepPurple[700], color: cyan[400] },
//   }
// })(Typography);




function LogOutButton(props) {
  const dispatch = useDispatch();


  return (
    <>
      <Button
        size='large'
        variant='outlined'
        style={{
          marginLeft: 'auto',
        }}
        // This button shows up in multiple locations and is styled differently
        // because it's styled differently depending on where it is used, the className
        // is passed to it from it's parents through React props
        className={props.className}
        onClick={() => dispatch({ type: 'LOGOUT' })}
      >
        Log Out
      </Button>
      <Typography>
        Logout
      </Typography>
      </>
  );
}

export default LogOutButton;
