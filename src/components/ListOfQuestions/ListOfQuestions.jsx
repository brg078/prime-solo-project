import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ListItemQuestion from '../ListItemQuestion/ListItemQuestion';
import Box from '@mui/material/Box';
import './ListOfQuestions.css';
import  Button  from '@mui/material/Button';
import { Container } from '@mui/system';


function ListOfQuestions(){
    const history = useHistory();
    const dispatch = useDispatch();
    const questions = useSelector(store => store.questionList);
    const user = useSelector((store) => store.user);
    


    useEffect(() => {
        getQuestions();
        userList();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
        console.log('This will run every second!');
        getQuestions();
        }, 60 * 1000);
        return () => clearInterval(interval);
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
        history.push('/user');
    }

    const returnToAskQuestions = () => {
        console.log('in returnToAskQuestions!');
        history.push('/questions');
    }

    const goHome = () => {
        console.log('in goHome');
        history.push('/user');
    }



    return (
        <div>
            <Container disableGutters sx={{minWidth: '90%', marginBottom: '100px'}}>
                <Box sx={{paddingTop: '7%', paddingBottom: '1%', width: '90%', justifyContent: 'center', margin: 'auto',  display: 'flex'}}>
                    {user.access === 1 && (<>
                        <Button color='secondary' variant='contained' onClick={returnToAskQuestions} sx={{margin: '2px'}}>Add Questions</Button>
                        <Button color='secondary' variant='contained' onClick={archiveQuestions} sx={{margin: '2px'}}>End Session / Archive</Button>
                    </>)}
                    <Button color='secondary' variant='contained' onClick={getQuestions} sx={{margin: '2px'}} >Refresh Questions List</Button>
                </Box>
                <Box sx={{ width: 1, justifyContent: 'center', padding:0, marginBottom:'1px'}}>
                            {questions.map(question => (
                                    <ListItemQuestion key={question.id} question ={question}/>         
                            ))}
                </Box>
                {user.access === 0 && (<>
                    <Box sx={{paddingTop: '2%', paddingBottom: '1%', width: '90%', justifyContent: 'center', margin: 'auto',  display: 'flex'}}>
                        <Button color='secondary' variant='contained' onClick={goHome} sx={{margin: '2px'}} >Back To Home</Button>
                    </Box>
                </>)}
            </Container>
        </div>
    )
}

export default ListOfQuestions;