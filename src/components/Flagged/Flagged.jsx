import { Typography, Box, FormControl, Select, MenuItem, Card, CardContent,Button } from "@mui/material";
import { Container } from '@mui/system';
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import ListFlaggedQuestion from "../ListFlaggedQuestion/ListFlaggedQuestion";
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: '#1A2027',
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: 'primary',
// }));



function Flagged (){
    const user = useSelector((store) => store.user);
    const flaggedQuestions = useSelector((store) => store.questionFlaggedList);
    const usersList = useSelector(store => store.usersListReducer);
    const dispatch = useDispatch();
    const [askerData, setAsker] = useState('');


    useEffect(() => {
        //getFlaggedQuestions();
        userList();
    }, []);


    // const getFlaggedQuestions = () => {
    //     console.log('in getFlaggedQuestions');
    //     dispatch({type: 'FETCH_FLAGGED', id: askerData});
    // }

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
        <Container disableGutters sx={{minWidth: '90%', marginBottom: '100px',marginTop: '60px'}}>
            {user.access === 1 && (<>
                <Box sx={{padding: '1%', marginTop: '5%',width: '90%', justifyContent: 'center', margin: 'auto',  display: 'flex'}}>
                    <Card sx={{backgroundColor: 'primary', marginTop:'1%', width: '50%', justifyContent: 'center', display: 'flex'}}>
                        <CardContent  sx={{justifyContent:'center'}}>
                            {/* <Typography>{JSON.stringify(user)}</Typography> */}
                            <Typography textAlign='center'>Student Question History</Typography>
                            <FormControl sx={{ m: 1, width: 300, justifyContent: 'center', display: 'flex'}}>
                                <Select sx={{justifyContent: 'center', display: 'flex'}} onChange={handleChange} >
                                    {/* <MenuItem key={0} value="0">
                                        None
                                    </MenuItem> */}
                                        {usersList.map((userlist) => (
                                            <MenuItem
                                                key={userlist.id}
                                                value={userlist.id}>
                                                {userlist.username}
                                            </MenuItem>
                                        ))}
                                </Select>
                            </FormControl>
                            {/* <Button variant='contained' sx={{margin:'5px'}} onClick={asker}>Choose a Student</Button> */}
                        </CardContent>
                    </Card>
                </Box>
                <Box sx={{ width: 1, justifyContent: 'center', padding:0, marginBottom:'1px'}}>
                            {flaggedQuestions.map(question => (
                                    <ListFlaggedQuestion key={question.id} question ={question}/>         
                            ))}
                </Box>
                {/* <Box sx={{ flexGrow: 1 }}>
                    <Grid>
                        {flaggedQuestions.map(question => (
                            <Grid key={question.id}>
                                <Item>
                                <ListFlaggedQuestion key={question.id} question ={question}/>
                                </Item>
                            </Grid>
                        ))}
                    </Grid>
                </Box> */}
            </>)}
        </Container>
        </>

    )
}

export default Flagged;