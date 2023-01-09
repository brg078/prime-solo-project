import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function InfoPage() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="container">
        <p>Info Page</p>
      </div>
    
      
        <Box sx={{ minWidth: 120 , maxWidth: 200}}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              placeholder='Select A Student'
              onChange={handleChange}
            >
              <MenuItem value='10'>Ten</MenuItem>
              <MenuItem value='20'>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
              {/* <MenuItem>
              <option value={40}>40</option>
              </MenuItem>
              <option><MenuItem>dd</MenuItem></option> */}
            </Select>
          </FormControl>
        </Box>
      
    </>
  );
}


export default InfoPage;
