import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import Events from './components/Events/Events';

function App() {
  return (
    <Box sx={{p: 5,}}>
      <Typography sx={{fontWeight: 'bold', textAlign: 'center'}} variant="h3" color="primary">Events</Typography>
   
      <Events/>
    </Box>
  );
}

export default App;
