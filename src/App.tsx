import {  Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { Toaster } from 'react-hot-toast';
import Events from './components/Events/Events';

function App() {
  return (<>

    <Toaster    //react hot toaster container

      position="top-right"
      reverseOrder={false}
    />

    <Box sx={{ p: 5, }}>
      <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} variant="h3" color="primary">Events</Typography>
   
      {/* show all events */}
      <Events />

    </Box>
  </>
  );
}

export default App;
