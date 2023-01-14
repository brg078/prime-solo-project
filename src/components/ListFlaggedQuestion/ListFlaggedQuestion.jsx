import { Typography,Card, CardContent, Box } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#D3D3D3',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'andale mono',
    fontSize: 20
}));

function ListFlaggedQuestion(props){
    let question = props.question;

    return(
        <div>
            <Box sx={{flexGrow:1, mt:'20px'}}>
            <Grid container spacing={0.2}>
                <Grid xs={11} xl={11}>
                    <Item>{question.question}</Item>
                </Grid>
                <Grid xs={1} xl={1}>
                    {question.flagged&&
                        <Item sx={{backgroundColor: '#FF7276'}}>Flagged{question.flagged}</Item>
                    }{question.approved &&
                        <Item sx={{backgroundColor: '#90EE90'}}>Approved{question.flagged}</Item>
                    }{question.approved==false &&
                        <Item>Unpproved{question.flagged}</Item>
                    }
                </Grid>
            </Grid>
            </Box>
            <Typography>{JSON.stringify(question)}</Typography>
        </div>
    )
}

export default ListFlaggedQuestion;