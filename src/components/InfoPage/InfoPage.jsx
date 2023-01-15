import React from 'react';
import { Button, Card, CardContent, Typography, Box, TextField } from '@mui/material';


function InfoPage(props) {


    

  return (
    <div className="container">
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
            Future functionalities:
          </Typography>
          <Typography sx={{fontSize: '20px'}}>
            -Multiple classroom capability     
          </Typography>
          <Typography sx={{fontSize: '20px'}}>
            -Further refinements of the user interface    
          </Typography>
          <Typography sx={{fontSize: '20px'}}>
            -   
          </Typography>
          <Typography>.
          </Typography>
          <Typography sx={{fontSize: '30px'}}>  
            Technologies Used:
          </Typography>
          <Typography sx={{fontSize: '20px'}}>  
              PostgreSQL, Express, React, Node JS, Material UI, Postico, FavIcon
          </Typography>
          <Typography>
          </Typography>
          <Typography>.
          </Typography>
          <Typography sx={{fontSize: '30px'}}>
            Thanks To:
          </Typography>
          <Typography sx={{fontSize: '20px'}}>
            -Dane,Liz, and all the staff at Prime
          </Typography>
          <Typography sx={{fontSize: '20px'}}>
            -My fellow Shawleagues
          </Typography>
          <Typography sx={{fontSize: '20px'}}>
            -My wife and family for supporting me
          </Typography>
        </Card>
      </Box>
    </div>
  );
}


export default InfoPage;
