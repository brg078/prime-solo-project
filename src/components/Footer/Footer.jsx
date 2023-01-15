import React from 'react';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
//import Grid from '@mui/system/Unstable_Grid/Grid';
import { Grid, Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import './Footer.css';


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#1A2027',
//   padding: '1px',
//   margin: '2px',
//   textAlign: 'center',
//   color: '#FFFFFF',
// }));


export default function Footer() {
  return (
    <div className='footers'>
      
      {/* <Container sx={{position: 'fixed', bottom: 0, ml: 'auto', mr: 'auto',width:'1200px'}}>
        <Grid
          container spacing={2}
          direction= "column"
          alignItems= "center"
          justifyContent= "center"
          backgroundColor= '#FFFFFF'
      
          style={{ minHeight: '10vh' }}
        >
          <Grid item xs={12} xl={12} >
          <Typography color='#FFFFFF' >©Brett R. Gebbie // Solo Project // Prime Academy</Typography>
          </Grid>
        </Grid>




      </Container> */}

      <div className='bottomtext'>
      <Typography>©Brett R. Gebbie // Solo Project // Prime Academy</Typography>
      </div>


    </div>
  );
}