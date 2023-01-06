import React from 'react';
import { ThemeProvider, Typography, Card, Container } from '@material-ui/core';
import { useTheme } from '@emotion/react';
//import { bgcolor } from '@mui/system';
//import Card from '@material-ui/core';
import CardActions from '@material-ui/core';
import CardContent from '@mui/material/CardContent';
import { Block } from '@material-ui/icons';
import { sizing } from '@mui/system';
import Box from '@mui/material/Box';


function AboutPage() {
  //const theme = useTheme();

  return (

<Box sx={{maxWidth : '75%',alignContent: 'center', justifyContent: 'center', margin: 'auto', padding: '1%', bgcolor: ''}}>
    {/* <Card sx={{bgcolor: 'red'}} >
      <CardContent> */}
        <Typography>
                What it is:
            </Typography>
            <Typography>
              Asking For a Friend is a learning tool.It gives a voice to students who would prefer to have someone else ask their questions for them!  Sometimes the best questions go unanswered, and Asking For a Friend can help make sure that happens less often.
            </Typography>
            <Typography>  
              Why it works:
            </Typography>
            <Typography>  
                AFAF anonymizes students’ questions and encourages their peers to ask those questions. The benefits are threefold: introverted pupils get to have input into the conversation more often, students are subjected to each others lines of inquiry, and it protects students who might feel an otherwise good question would garner them mockery.
            </Typography>
            <Typography>
            </Typography>
            <Typography>
              How it works:
            </Typography>
            <Typography>
              Students can enter up to three questions, which are then reviewed by the teacher. Once all submitted questions are reviewed for relevance to the topic at hand, the teacher submits the remaining questions (anonymously) to the whole class.  Students are then allowed to pick any question and ask it to the class.  Alternatively the teacher can ask on the students behalf if no students are willing to speak up.
        </Typography>
      {/* </CardContent>
    </Card> */}
  </Box>


  );
}

export default AboutPage;
