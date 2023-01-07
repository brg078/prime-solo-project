import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ListItemQuestion from '../ListItemQuestion/ListItemQuestion';
import Box from '@mui/material/Box';
import './ListOfQuestions.css';
import { Button, Typography, Container } from '@material-ui/core';
import { amber,deepPurple,cyan } from '@mui/material/colors';
import { ThemeProvider, withStyles} from '@material-ui/core';
//import Container from '@material-ui/core';



const BottomButton = withStyles({
    root: {
        backgroundColor:amber[500],
        color: cyan[500],
        margin: '1px',
        //padding: '1px',
        '&:hover': {backgroundColor: amber[100], },
        '&:active': {transform: "scale3d(1.05, 1.05, 1)"}
    }
})(Button);

function ListOfQuestions(){
    const history = useHistory();
    const dispatch = useDispatch();
    const questions = useSelector(store => store.questionList);

    useEffect(() => {
        getQuestions();
        userList();
    }, []);

    function userList(){
        dispatch({type: 'FETCH_USERS'});  
    }

    const getQuestions = () => {
        dispatch({type: 'FETCH_QUESTIONS'});
        console.log('dom side question store', questions);
    }

    const archiveQuestions = () => {
        console.log('in archiveQuestions!');
        dispatch({type: 'ARCHIVE_QUESTIONS'});
    }

    const returnToAskQuestions = () => {
        console.log('in returnToAskQuestions!');
        history.push('/questions');
    }



    return (
        <div>
            <Box sx={{padding: '10px', width: '90%', justifyContent: 'center', margin: 'auto%', display: 'flex' }}>
                    <ul className='mainQuestionList'>
                        {questions.map(question => (
                            <li key={question.id}>
                                <ListItemQuestion key={question.id} question ={question}/>
                            </li>
                        ))}
                    </ul>
            </Box>
            <Box sx={{padding: '10px', width: '90%', justifyContent: 'center', margin: 'auto', marginBottom:'100px', display: 'flex'}}>
                <BottomButton onClick={getQuestions}>Refresh Questions List</BottomButton>
                <BottomButton onClick={archiveQuestions}>End Session / Archive</BottomButton>
                <BottomButton onClick={returnToAskQuestions}>Add Questions</BottomButton>
            </Box>
            
        </div>
    )
}

export default ListOfQuestions;