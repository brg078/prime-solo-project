import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import  Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {MilitaryTech,} from '@mui/icons-material';
import { Card } from '@mui/material';
//import './LogOutButton.css'






function LogOutButton(props) {
  const dispatch = useDispatch();


  return (
    <div className='logOut'>
      <div className='whatever'></div>
      <div>

      </div>
      <Button
        size='large'
        color='secondary'
        variant='contained'
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

      </div>
  );
}

export default LogOutButton;
