import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#F0F8FF',
    padding: theme.spacing(1),
    textAlign: 'center',
    // color: '#FFFFFF',
    fontFamily: 'andale mono',
    fontSize: 20,
    spacing:2
}));

function ListFlaggedQuestion(props){
    let question = props.question;


    function questionReturn(q){
        if (q.flagged) {
            return(
                <>
                
                <Grid container spacing={2} sx={{marginBottom:'3px'}}>
                    <Grid xs={10} xl={10}>
                        <Item>{question.question}</Item>
                    </Grid>
                    <Grid item xs={2} xl={2}>
                            <Item sx={{backgroundColor: '#FF7276'}}>Flagged</Item>
                    </Grid>
                </Grid>
                </>
            )
        } else if (q.goldstar){
            return(
                <>
                <Grid container spacing={0.5} sx={{marginBottom:'3px'}}>
                    <Grid xs={10} xl={10}>
                        <Item>{question.question}</Item>
                    </Grid>
                    <Grid item xs={2} xl={2}>
                            <Item sx={{backgroundColor: '#F9F295'}}>Gold Star</Item>
                    </Grid>
                </Grid>
                </>
            )
        }else if (q.approved){
            return(
                <>
                <Grid container spacing={0.5}  sx={{marginBottom:'3px'}}>
                    <Grid xs={10} xl={10}>
                        <Item>{question.question}</Item>
                    </Grid>
                    <Grid item xs={2} xl={2}>
                            <Item sx={{backgroundColor: '#90EE90'}}>Approved</Item>
                    </Grid>
                </Grid>
                </>
            )
        }else if (q.approved==false){
            return(
                <>
                <Grid container  spacing={0.5} sx={{marginBottom:'3px'}}>
                    <Grid xs={10} xl={10}>
                        <Item>{question.question}</Item>
                    </Grid>
                    <Grid item xs={2} xl={2}>
                            <Item>Unapproved</Item>
                    </Grid>
                </Grid>
                </>
            )
        }

    }


    return(
        <div>
            {questionReturn(question)}
        </div>
    )
}

export default ListFlaggedQuestion;