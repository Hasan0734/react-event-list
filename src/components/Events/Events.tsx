import { Box, Typography } from '@mui/material';
import * as  React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Event from './Event';
import { fetchEvents } from './eventSlice';
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import EventSkeleton from './EventSkeleton';


export default function Events() {
  const [isLoading, setisLoading] = React.useState(true)
  const { events, error } = useSelector((state: any) => state.events)
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(fetchEvents())

    const timer = setTimeout(() => {
      setisLoading(false)
    }, 5000);
    return () => clearTimeout(timer);
  }, [dispatch])

  return (
    <SkeletonTheme   //skeleton theme give here props
      duration={2}> 

      <Box sx={{ mt: 3 }}>

        {/* show the skeleton list maping*/}

        {isLoading && Array(events?.data?.length || 4).fill(0).map((event, i) => <EventSkeleton key={i} />)}

        {/* event list maping */}
        {isLoading === false && (events?.data?.length > 0 ? events?.data?.map((event: any, i: number) => <Event key={++i} event={event} />) : <Typography>Event not available</Typography>)}


        {/* fetch data any error show here */}
        {error && <Typography>{error}</Typography>}

      </Box>
    </SkeletonTheme>
  )
}
