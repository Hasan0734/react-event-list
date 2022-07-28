import { Box, CircularProgress, Typography } from '@mui/material';
import * as  React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Event from './Event';
import { fetchEvents } from './eventSlice';



export default function Events() {
  const [isLoading, setisLoading] = React.useState(true)
  const { events, error } = useSelector((state: any) => state.events)
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(fetchEvents())

    const timer = setTimeout(() => {
      setisLoading(false)
    }, 1000);
    return () => clearTimeout(timer);


  }, [])


  return (
    <Box>

      <Box sx={{textAlign: 'center', mt: 2}}>
        {isLoading && <CircularProgress />}
      </Box>

      {isLoading === false && (events?.data.length> 0 ?  events?.data?.map((event: any, i: number) => <Event key={++i} event={event} />): <Typography>Event not available</Typography>)}

      {error && <Typography>{error}</Typography>}


    </Box>
  )
}
