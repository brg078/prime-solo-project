import { Typography,Card, CardContent } from '@mui/material';
import React from 'react';


function ListFlaggedQuestion(props){
    let question = props.question;

    return(
        <>
            <Card sx={{marginTop: '1%'} }>
                <CardContent>
                    <Typography>{JSON.stringify(question)}</Typography>

                </CardContent>
                
            </Card>
        </>
    )
}

export default ListFlaggedQuestion;