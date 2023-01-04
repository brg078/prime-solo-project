import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


function ListItemQuestion(props) {

    const question = props.question;
    const dispatch = useDispatch();


    function approveQuestion(){
        console.log('in approveQuestion!',question.id);
        dispatch({
            type: 'APPROVE_QUESTION', payload: question.id
        });
    }
    

    function deleteQuestion(){
        console.log('in deleteQuestion!',question.id);
        if (confirm('Are you sure you want to delete this question?') == true){;
            dispatch({
                type: 'DELETE_QUESTION', payload: question.id
            });
        } else {
            console.log('cancel DELETE!');
        }
    }


    function flagQuestion(){
        console.log('in flagQuestion', question.id);
        if (confirm('Are you sure you want to flag this question?') == true){;
            dispatch({
                type: 'FLAG_QUESTION', payload: question.id
            });
        } else {
            console.log('cancel FLAG_QUESTION!');
        }
    }


    return (
        <>
            <td>{question.username}</td>
            <td>{question.question}</td>
            <td>{(question.approved? 'Yes':'No')}</td>
            <td>{(question.flagged? 'Yes':'No')}</td>
            <td>
                {(question.approved?
                <button onClick={approveQuestion}>Disapprove</button> : 
                <button onClick={approveQuestion}>Approve</button>)}
            </td>
            <td><button onClick={flagQuestion}>Mark As Flagged, Archive Me</button></td>
            <td><button onClick={deleteQuestion}>Delete</button></td>
        </>
    )
}

export default ListItemQuestion;


