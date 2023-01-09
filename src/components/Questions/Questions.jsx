import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardContent, Typography, Box, TextField } from '@mui/material';



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
        history.push('/list');
    }

    function goToQuestionList(){
        console.log('in goToQuestionList!');
        history.push('/list');
    }

    const cardStyle = {
        width: '100%'
    }

    return(
        <div className='questionsPage'>
            
            <Box 
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding='5%'
                textAlign='center'
                sx={{width:'90%'} } >
                <Card raised sx={cardStyle}>
                <CardContent>
                    <Typography padding='1%' variant='h4' textAlign='center' >Ask a question for a friend!</Typography>
                    {/* <Typography padding='1%' variant='h2' textAlign='center' >{user.username}!</Typography>
                    <Typography variant='h4' textAlign='center'>Your ID is:</Typography> */}
                </CardContent>
                <CardContent>
                    <TextField sx={{width: '75%'}} placeholder= 'Enter Question' onChange={handleChange} type='text'></TextField>
                    <Button sx={{padding:'15px',marginLeft:'5px'}}  variant='contained' onClick={submitQuestion}>Submit Question</Button>
                </CardContent>
                <CardContent>
                    <Button variant='contained' onClick={goToQuestionList}>I'll ask next time!</Button>
                </CardContent>
                </Card>
            </Box>
        </div>
    )




}

export default Questions;