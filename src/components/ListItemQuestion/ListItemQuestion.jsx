import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


function ListItemQuestion(props) {

    const question = props.question;
    const dispatch = useDispatch();


    function approveQuestion(){
        console.log('in approveQuestion!');
    }
        
    function deleteQuestion(){
        console.log('in deleteQuestion!',question.id);
        //alert('Are you sure you want to delete ADD ALERT LATER?');
        dispatch({
            type: 'DELETE_QUESTION', payload: question.id
        });
    }


    return (
        <>
            <td>{question.username}</td>
            <td>{question.question}</td>
            <td>{(question.approved? 'Yes':'No')}</td>
            <td>{(question.flagged? 'Yes':'No')}</td>
            <td><button onClick={approveQuestion}>Approve</button></td>
            <td><button>Mark As Flagged</button></td>
            <td><button onClick={deleteQuestion}>Delete</button></td>
        </>
    )
}

export default ListItemQuestion;