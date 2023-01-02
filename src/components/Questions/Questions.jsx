import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';


function Questions(){

    const user = useSelector((store) => store.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const [question, setQuestion] = useState('');
    const handleChange = (event) => {
        setQuestion(event.target.value);
    }

    function submitQuestion(){
        console.log('in submitQuestions!',question, user.id);
        dispatch({type: 'ADD_QUESTION', id: user.id, payload: question});
    }

    function goToQuestionList(){
        console.log('in goToQuestionList!');
        history.push('/list');
    }


    return(
        <div className='questionsPage'>
            <h2>question page up</h2>
            <h3>Ask a question</h3>
            <p>
                <input
                    placeholder='question 1'
                    type="text"
                    onChange={handleChange}
                />
                <button onClick={submitQuestion}>Submit Question</button>
            </p>
            <p>
                <button onClick={goToQuestionList}>Go to all Questions</button>
            </p>
        </div>
    )




}

export default Questions;