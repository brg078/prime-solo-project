import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


function ListItemQuestion(props) {

    const question = props.question;
    const dispatch = useDispatch();
    const usersList = useSelector(store => store.usersListReducer);


    function approveQuestion(){
        console.log('in approveQuestion!',question.id);
        dispatch({type: 'APPROVE_QUESTION', payload: question.id});
    }
    

    function deleteQuestion(){
        console.log('in deleteQuestion!',question.id);
        if (confirm('Are you sure you want to delete this question?') == true){;
            dispatch({type: 'DELETE_QUESTION', payload: question.id});
        } else {
            console.log('cancel DELETE!');
        }
    }


    function flagQuestion(){
        console.log('in flagQuestion', question.id);
        if (confirm('Are you sure you want to flag this question?') == true){;
            dispatch({type: 'FLAG_QUESTION', payload: question.id});
        } else {
            console.log('cancel FLAG_QUESTION!');
        }
    }


    function asker(){
        let dropDownValue = document.getElementById(question.id).value;
        console.log('i asked for a friend!', question.id, dropDownValue);
        dispatch({type: 'ASKED_QUESTION', id: question.id, payload: dropDownValue});

}


    return (
        <>
            <td>{question.id}.  {question.question}</td>
            <td>
                <select id = {question.id}>
                    <option key={0} value="0"></option>
                    {usersList.map(user => (
                        <option key={user.id} value={user.id}>
                            Name: {user.username} User ID: {user.id}
                        </option>
                    ))}
                </select>  
            </td>
            
            <td>{question.username}</td>
            <td><button onClick={asker}>checkmark</button></td>
            <td>{(question.approved? 'Yes':'No')}</td>
            <td>{(question.flagged? 'Yes':'No')}</td>
            <td>
                {(question.approved?
                <button onClick={approveQuestion}>Disapprove</button> : 
                <button onClick={approveQuestion}>Approve</button>)}
            </td>
            <td><button onClick={flagQuestion}>Mark As Flagged</button></td>
            <td><button onClick={deleteQuestion}>Delete</button></td>
        </>
    )

//     return ({
        
//             userName:question.username,
//             question: question.question,
//             approval: {(question.approved? 'Yes':'No')},
//             flag: {(question.flagged? 'Yes':'No')},
//             approveButton: {(question.approved?
//                 <button onClick={approveQuestion}>Disapprove</button> : 
//                 <button onClick={approveQuestion}>Approve</button>)},
            
//             flagButton: <button onClick={flagQuestion}>Mark As Flagged, Archive Me</button>
//             deleteButton: <button onClick={deleteQuestion}>Delete</button>

//             })
}

export default ListItemQuestion;


