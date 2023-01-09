import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ListItemQuestion from '../ListItemQuestion/ListItemQuestion';
import Box from '@mui/material/Box';
import './ListOfQuestions.css';
import  Button  from '@mui/material/Button';
import { amber,deepPurple,cyan } from '@mui/material/colors';
import { Container } from '@mui/system';




// const BottomButton = withStyles({
//     root: {
//         backgroundColor:amber[500],
//         color: cyan[500],
//         margin: '1px',
//         //padding: '1px',
//         '&:hover': {backgroundColor: amber[100], },
//         '&:active': {transform: "scale3d(1.05, 1.05, 1)"}
//     }
// })(Button);

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
        history.push('/user');
    }

    const returnToAskQuestions = () => {
        console.log('in returnToAskQuestions!');
        history.push('/questions');
    }



    return (
        <div>
            <Container disableGutters sx={{minWidth: '90%'}}>
                <Box sx={{ width: 1, justifyContent: 'center', padding:0}}>
                        {/* <ul className='mainQuestionList'> */}
                            {questions.map(question => (
                                // <li key={question.id}>
                                    <ListItemQuestion key={question.id} question ={question}/>
                                
                            ))}
                        {/* </ul> */}
                </Box>
                <Box sx={{padding: '5%', width: '90%', justifyContent: 'center', margin: 'auto', marginBottom:'100px', display: 'flex'}}>
                    <Button variant='contained' onClick={getQuestions} sx={{margin: '2px'}} >Refresh Questions List</Button>
                    <Button variant='contained' onClick={archiveQuestions} sx={{margin: '2px'}}>End Session / Archive</Button>
                    <Button variant='contained' onClick={returnToAskQuestions} sx={{margin: '2px'}}>Add Questions</Button>
                </Box>
            </Container>
        </div>
    )
}

export default ListOfQuestions;