import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import  Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {MilitaryTech,} from '@mui/icons-material';
import { Card } from '@mui/material';






function LogOutButton(props) {
  const dispatch = useDispatch();
  const subScore = useSelector((store)=> store.scoresSubmitted);
  const askScore = useSelector((store)=> store.scoresAsked);
  const goldScore = useSelector((store)=> store.scoresGold);
  const scoreKeeper = parseInt(subScore) + parseInt(askScore)*10 + parseInt(goldScore)*20;

  return (
    <>

      {scoreKeeper >=500 &&(<MilitaryTech sx={{color: "#CD7F32", fontSize: "40px"}}></MilitaryTech>)}
      <Typography style={{marginLeft: '200px'}}>My Score: {scoreKeeper} points</Typography>
      {scoreKeeper >=100 &&(<MilitaryTech sx={{color: "#CD7F32", fontSize: "40px"}}></MilitaryTech>)}

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

      </>
  );
}

export default LogOutButton;
