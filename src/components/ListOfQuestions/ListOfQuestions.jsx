import React from 'react';
//import { useState } from 'react';
import { useDispatch } from 'react-redux';
//import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';


function ListOfQuestions(){
    //const user = useSelector((store) => store.user);
    const history = useHistory();
    const dispatch = useDispatch();

    return (
        <div>
            <h2>List</h2>
            

        </div>
    )
}

export default ListOfQuestions;