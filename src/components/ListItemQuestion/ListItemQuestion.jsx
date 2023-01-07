import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardActionArea, CardHeader, CardContent } from '@mui/material';
import { amber,deepPurple,cyan,lightGreen, grey } from '@mui/material/colors';
import { ThemeProvider, withStyles} from '@material-ui/core';
import { Button, Typography } from '@material-ui/core';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';





const QuestionCard = withStyles({
    
    root: {
        //color: (question.flagged? amber[500]:cyan[500]),
        raised: true,
        //minWidth: '1200px',
        width:'1250px',
        //maxWidth: '1500px',
        letterSpacing: '0.2rem',
        textDecoration: 'none',
        padding: '1px',
        margin: '0.5rem',
        //backgroundColor: deepPurple[500],
        '&:hover': {transform: "scale3d(1.005, 1.0005, -33)"},

    }
})(Card);


const FormControli = withStyles({
    
    root: {
        padding: '1px',
        margin: '0.5rem',
    }
})(FormControl);


const Cardfront = withStyles({
    root: {
        color: amber[500],
        raised: true,
        // minWidth: '1200px',
        width:'1000px',
        // maxWidth: '1500px',
        letterSpacing: '0.2rem',
        textDecoration: 'none',
        padding: '1px',
        margin: '0.5rem',
        backgroundColor: deepPurple[500],
        '&:hover': {backgroundColor: deepPurple[200], color: cyan[400] },
        //'&:active': {transform: "scale3d(1.05, 1.05, 1)"}

    }
})(Card);

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

const Typographyy = withStyles({
    root: {
        padding: '10px',
        width: 'auto',
        textAlign: 'left',
        justifyContent: 'left'
        //margin: '1px'
    }
})(Typography);


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
        {/* <Cardfront>
            <Typographyy padding='px' >
                REF CARD: {question.id}, Flagged?:{(question.flagged? 'Yes':'No')}, Approved?:{(question.approved? 'Yes':'No')}
            </Typographyy>
        </Cardfront> */}

        <QuestionCard style={question.approved? {backgroundColor: lightGreen[300]} : {backgroundColor: grey[300]}} >
            <CardContent>
                {/* <Typographyy padding='px' >{question.id} USED FOR REFERENCE ONLY</Typographyy> */}
                <Typographyy>{question.question}, asked by: {question.username}</Typographyy>
                
                

                {/* <Typographyy>{question.username}</Typographyy> */}
                
            </CardContent>
            <CardContent>
                <FormControli>

                    <select id = {question.id}>
                        <option key={0} value="0"></option>
                        {usersList.map(user => (
                            <option key={user.id} value={user.id}>
                                Name: {user.username} User ID: {user.id}
                            </option>
                        ))}
                    </select>  

                </FormControli>
                <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                    <Select>
                        <MenuItem disabled value="">
                            <em>Placeholder</em>
                        </MenuItem>
                            {usersList.map((user) => (
                                <MenuItem
                                    key={user.id}
                                    value={user.id}
                                    //style={getStyles(name, personName, theme)}
                                >
                                    {user.username}
                                </MenuItem>
                            ))}
                    </Select>

                </FormControl>
                <BottomButton onClick={asker} >asker</BottomButton>
                <BottomButton onClick={deleteQuestion}>Delete</BottomButton>
                <BottomButton onClick={flagQuestion}>Mark As Flagged</BottomButton>
                {(question.approved?
                    <BottomButton onClick={approveQuestion}>Disapprove</BottomButton> : <BottomButton  onClick={approveQuestion}>Approve</BottomButton>
                )}
                {/* <Typographyy>Approved?:{(question.approved? 'Yes':'No')}</Typographyy> */}
                {/* <Typographyy>Flagged?:{(question.flagged? 'Yes':'No')}</Typographyy> */}
            </CardContent>
        </QuestionCard>
        </>
    )
}

export default ListItemQuestion;


