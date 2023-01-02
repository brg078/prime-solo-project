import React from 'react';
//import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

function UserPage() {

  const user = useSelector((store) => store.user);
  const history = useHistory();


  function clickHandler(){
    console.log('to questions page clickhandler');
    history.push('/questions');
  }

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      {/* <LogOutButton className="btn" /> */}
      <button onClick={clickHandler}>
        Let's Ask Some Questions!
      </button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
