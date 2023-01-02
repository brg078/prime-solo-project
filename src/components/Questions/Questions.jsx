import React from 'react';

function Questions(){

    function submitQuestions(){
        console.log('in submitQuestions!')
    }

    return(
        <div className='questionsPage'>
        <p>questions page up</p>
        <p>Ask up to three questions</p>
        <input placeholder='question 1' />
        <input placeholder='question 2' />
        <input placeholder='question 3' />
        <button onClick={submitQuestions}>Submit Questions</button>
        </div>
    )




}

export default Questions;