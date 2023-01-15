import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent } from '@mui/material';
import { lightGreen, grey } from '@mui/material/colors';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { MilitaryTech, Star } from '@mui/icons-material';
import Grid from '@mui/material/Unstable_Grid2';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#F0F8FF',
    padding: theme.spacing(1),
    textAlign: 'center',
    paddingBottom:'40px',
    fontFamily: 'andale mono',
    fontSize: 30,
    spacing:2
}));


function ListItemQuestion(props) {

    const question = props.question;
    const dispatch = useDispatch();
    const usersList = useSelector(store => store.usersListReducer);
    const user = useSelector((store) => store.user);
    const [askerData, setAsker] = useState('');
    

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
        console.log('i asked for a friend!', question.id, askerData);
        dispatch({type: 'ASKED_QUESTION', id: question.id, payload: askerData});
    }

    
    const handleChange = (event) => {
        setAsker(event.target.value);
    };

    function goldStar(){
        console.log('in goldStar', question.id);
        if (confirm('Are you sure you want to give this question a GOLD STAR?!?!!??') == true){;
            dispatch({type: 'GOLD_QUESTION', payload: question.id});
        } else {
            console.log('cancel GOLD_QUESTION!');
        }
    }

    
    return (
        <>
            {user.access === 1 && (<>
                <Card
                    raised
                    mr='0'
                    ml='0'
                    sx={question.approved?
                    {backgroundColor: lightGreen[300], marginTop:'1%', width: '100%',marginLeft:0} :
                    {backgroundColor: grey[300], marginTop:'1%', width: '100%'}} >
                    {user.access === 1 && (<>
                        <CardContent>
                            <Typography>{question.question} submitted by: {question.username}{question.goldstar &&(<Star sx={{color:'#FFD700', fontSize: '50px'}}></Star>)}</Typography>              
                        </CardContent>
                    
                    

                    </>)}
                    <CardContent>
                    {user.access === 1 && (<>
                        <FormControl sx={{ m: 1, width: 300}}>
                            <Select id={question.id} onChange={handleChange} >

                                    {usersList.map((userlist) => (
                                        <MenuItem
                                            key={userlist.id}
                                            value={userlist.id}
                                        >
                                            {userlist.username}
                                        </MenuItem>
                                    ))}
                            </Select>
                        </FormControl>
                        </>)}
                        {user.access === 1 && (<>
                        <Button variant='contained' sx={{margin:'5px', width:'150px'}} onClick={asker} >Answered</Button>
                        <Button variant='contained' sx={{margin:'5px', width:'150px'}} onClick={deleteQuestion}>Delete</Button>
                        <Button variant='contained' sx={{margin:'5px', width:'150px'}} onClick={flagQuestion}>Flag</Button>
                        <Button variant='contained' sx={{margin:'5px', width:'150px'}} onClick={goldStar}>Gold Star</Button>
                        {(question.approved?
                            <Button variant='contained' sx={{margin:'5px', width:'150px'}} onClick={approveQuestion}>Disapprove</Button> : <Button variant='contained' sx={{margin:'5px', width:'150px'}} onClick={approveQuestion}>Approve</Button>
                        )}
                        </>)}
                    </CardContent>
                </Card>
            </>)}
            <>
                {user.access ===0 && question.approved==true && question.goldstar==true && (
                    <>
                        <Grid container spacing={2} sx={{marginBottom:'3px'}}>
                            <Grid xs={12} xl={12}>
                                <Item sx={{height: '40px', margin:'auto'}}     >
                                    {question.goldstar &&(<Star sx={{color: "#A48111", fontSize:'50px'}}></Star>)}
                                    {question.question}
                                    
                                </Item>
                            </Grid>
                        </Grid>
                    </>
                )}
                {user.access ===0 && question.approved==true && question.goldstar==false &&(
                    <>
                        <Grid container spacing={2} sx={{marginBottom:'3px'}}>
                            <Grid xs={12} xl={12}>
                                <Item sx={{height: '40px', margin:'auto'}}     >
                                    {!question.goldstar &&(<Star sx={{color: "#FFFFFF", fontSize:'50px'}}></Star>)}
                                    {question.question}
                                    
                                </Item>
                            </Grid>
                        </Grid>
                    </>
                )}
            </>
        </>
    )
}

export default ListItemQuestion;


