import React from 'react';
import { Card, Typography, Box} from '@mui/material';








function AboutPage() {

  return (
    <div>
      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop='5%'

        padding='5%'
        textAlign='center'
        sx={{width:'90%'} } >
        <Card raised sx={{padding: '20px', backgroundColor: '#F0F8FF', fontSize:'20px'}}>
          <Typography sx={{fontSize: '30px'}}>
              What it is:
          </Typography>
          <Typography sx={{fontSize: '20px'}}>
            Asking For a Friend is a learning tool. It gives a voice to students who would prefer to express their curiosity without speaking up.  Sometimes the best questions go unasked, and Asking For a Friend can help make sure that happens less often.
          </Typography>
          <Typography>.
          </Typography>

          <Typography sx={{fontSize: '30px'}}>  
            Why it works:
          </Typography>
          <Typography sx={{fontSize: '20px'}}>  
              Asking For a Friend anonymizes students’ questions and encourages their peers to answer those questions. The benefits are threefold: introverted pupils get to have input into the conversation more often, students are subjected to each others lines of inquiry, and it protects students who might feel an otherwise good question would garner them mockery.
          </Typography>
          <Typography>
          </Typography>
          <Typography>.
          </Typography>
          <Typography sx={{fontSize: '30px'}}>
            How it works:
          </Typography>
          <Typography sx={{fontSize: '20px'}}>
            Students can enter a question, which is then reviewed by the teacher. Once all submitted questions are reviewed for relevance to the topic at hand, the teacher submits the remaining questions (anonymously) to the whole class.  Students are then allowed to pick any question and answer it to the class.  Alternatively the teacher can answer on the students behalf if no students are willing to speak up.
          </Typography>
        </Card>
      </Box>
    </div>

  );
}

export default AboutPage;
