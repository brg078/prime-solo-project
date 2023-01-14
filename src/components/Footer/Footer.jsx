import React from 'react';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
//import Grid from '@mui/system/Unstable_Grid/Grid';
import { Grid, Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1A2027',
  padding: '1px',
  margin: '2px',
  textAlign: 'center',
  color: '#FFFFFF',
}));


export default function Footer() {
  return (
    <div>
      <Box>
      <Container disableGutters sx={{mt:'10px', mb:'10px', p:0.5, position: 'sticky', bottom: 0, width:1}}>
        <Grid
          container spacing={2}
          direction= "column"
          alignItems= "center"
          justifyContent= "center"
          backgroundColor= 'primary'
      
          style={{ minHeight: '10vh' }}
        >
          <Grid item xs={12}>
          <Typography color='#FFFFFF' >©Brett R. Gebbie // Solo Project // Prime Academy</Typography>
          </Grid>
        </Grid>




      </Container>
      </Box>

    </div>
  );
}