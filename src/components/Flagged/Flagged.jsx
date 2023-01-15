import { Typography, Box, FormControl, Select, MenuItem, Card, CardContent,Button } from "@mui/material";
import { Container } from '@mui/system';
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import ListFlaggedQuestion from "../ListFlaggedQuestion/ListFlaggedQuestion";
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';


function Flagged (){
    const user = useSelector((store) => store.user);
    const flaggedQuestions = useSelector((store) => store.questionFlaggedList);
    const usersList = useSelector(store => store.usersListReducer);
    const dispatch = useDispatch();
    const [askerData, setAsker] = useState('');


    useEffect(() => {
        userList();
    }, []);



    function userList(){
        dispatch({type: 'FETCH_USERS'});  
    }


    const handleChange = (event) => {
        setAsker(event.target.value);
        console.log(askerData, event.target.value);
        dispatch({type: 'FETCH_FLAGGED', id: event.target.value});
    };





    return(
        
        // {user.access === 1 && (<></>)}
        

        <>
        <Container disableGutters sx={{minWidth: '90%', marginBottom: '100px',marginTop: '6%'}}>
            {user.access === 1 && (<>
                <Box sx={{padding: '1%', marginTop: '5%',width: '90%', justifyContent: 'center', margin: 'auto',  display: 'flex'}}>
                    <Card sx={{backgroundColor: '#F0F8FF', marginTop:'1%', width: '50%', justifyContent: 'center', display: 'flex'}}>
                        <CardContent  sx={{justifyContent:'center'}}>
                            <Typography textAlign='center'>Student Question History</Typography>
                            <FormControl sx={{ m: 1, width: 300, justifyContent: 'center', display: 'flex', fontSize:'20px'}}>
                                <Select sx={{justifyContent: 'center', display: 'flex', fontSize:'20px'}} onChange={handleChange} >

                                        {usersList.map((userlist) => (
                                            <MenuItem
                                                key={userlist.id}
                                                value={userlist.id}
                                                sx={{fontSize:'20px'}}  >
                                                {userlist.username}
                                            </MenuItem>
                                        ))}
                                </Select>
                            </FormControl>
                        </CardContent>
                    </Card>
                </Box>
                <Box sx={{ width: 1, justifyContent: 'center', padding:0, marginBottom:'1px'}}>
                    {/* <Grid container spacing={2}> */}
                            {flaggedQuestions.map(question => (
                                    <ListFlaggedQuestion key={question.id} question ={question}/>         
                            ))}
                            {/* </Grid> */}
                </Box>
            </>)}
        </Container>
        </>

    )
}

export default Flagged;