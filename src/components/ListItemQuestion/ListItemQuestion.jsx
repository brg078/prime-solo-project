import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, Modal } from '@mui/material';
import { lightGreen, grey } from '@mui/material/colors';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import {Box} from '@mui/material';
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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    textAlign:'center',
    bgcolor: '#F0F8FF',
    border: '1px solid #000',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};


function ListItemQuestion(props) {

    const [openDelete, setOpenDelete] = React.useState(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);

    const [openAnswer, setOpenAnswer] = React.useState(false);
    const handleOpenAnswer = () => setOpenAnswer(true);
    const handleCloseAnswer = () => setOpenAnswer(false);

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
        dispatch({type: 'DELETE_QUESTION', payload: question.id});
    }


    function flagQuestion(){
        console.log('in flagQuestion', question.id);
        dispatch({type: 'FLAG_QUESTION', payload: question.id});
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
        dispatch({type: 'GOLD_QUESTION', payload: question.id});
    }

    
    return (
        <>
        <div>
            <Modal
                open={openDelete}
                onClose={handleCloseDelete}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                        {question.question}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Submitted by: {question.username}
                    </Typography>
                    <Button variant='contained' sx={{margin:'5px', width:'150px',bgcolor:'grey'}} onClick={deleteQuestion}>Confirm Delete</Button>
                    <Button variant='contained' sx={{margin:'5px', width:'150px',bgcolor:'#FF7276'}} onClick={flagQuestion}>Confirm Flag</Button>
                    <Button variant='contained' sx={{margin:'5px', width:'150px'}} onClick={handleCloseDelete}>Go Back</Button>
                </Box>
            </Modal>
        </div>
        <div>
            <Modal
                open={openAnswer}
                onClose={handleCloseAnswer}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                        {question.question}
                    </Typography>
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                        Answered by:
                    </Typography>
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
                    <div>
                        <Button variant='contained' sx={{margin:'5px', width:'150px'}} onClick={asker}>Submit</Button>
                    </div>
                    <div>
                        <Button variant='contained' sx={{margin:'5px', width:'150px'}} onClick={handleCloseAnswer}>Go Back</Button>
                    </div>
                </Box>
            </Modal>
        </div>



            {user.access === 1 && (<>
                <Card
                    id='adminQuestionCard'
                    raised
                    sx={question.approved?
                    {backgroundColor: lightGreen[300], marginTop:'1%', width: '100%',marginLeft:0} :
                    {backgroundColor: grey[300], marginTop:'1%', width: '100%'}} >
                    <CardContent>
                        <Typography sx={{fontSize: '20px', textAlign: 'center'}} >{question.goldstar &&(<Star sx={{color:'#A48111'}} ></Star>)}{question.question} </Typography>
                        <Typography sx={{textAlign: 'center'}}>Submitted by: {question.username}</Typography>           
                    </CardContent>
                    <CardContent id='buttonrow' sx={{textAlign: 'center'}} >
                        {(question.approved?
                            <>
                            <Button variant='contained' sx={{width:'150px',margin:'5px'}} onClick={handleOpenAnswer} >Answered</Button>
                            <Button variant='contained' sx={{margin:'5px', width:'150px',bgcolor:'#FF7276'}} onClick={approveQuestion}>Disapprove</Button>
                            {!question.goldstar && (<Button variant='contained' sx={{margin:'5px', width:'150px', bgcolor:'#FFD700'}} onClick={goldStar}>Gold Star</Button>)}
                            </> : <>
                            <Button variant='contained' sx={{margin:'5px', width:'150px',bgcolor:'#FF7276'}} onClick={handleOpenDelete}>Delete/Flag</Button>
                            <Button variant='contained' sx={{margin:'5px', width:'150px', bgcolor:lightGreen[300]}} onClick={approveQuestion}>Approve</Button>
                            </>
                        )}
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


