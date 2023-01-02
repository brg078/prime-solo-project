import React, {useEffect} from 'react';
//import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import rootReducer from '../../redux/reducers/_root.reducer';
//import { useHistory } from 'react-router-dom';


function ListOfQuestions(){
    //const history = useHistory();
    const dispatch = useDispatch();
    const questions = useSelector(store => store.questionList);

    useEffect(() => {
        getQuestions();
    }, []);

    const getQuestions = () => {
        dispatch({type: 'FETCH_QUESTIONS'});
        console.log('dom side question store', questions);
    }

    return (
        <div>
            <h2>List</h2>
            <p>{JSON.stringify(questions)}</p>
            <button onClick={getQuestions}>Get Questions List</button>
            
        </div>
    )
}

export default ListOfQuestions;