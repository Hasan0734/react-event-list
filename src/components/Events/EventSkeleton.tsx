import * as React from 'react'
import { List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';

import Skeleton from 'react-loading-skeleton'


export default function EventSkeleton() {
    // const [open, setOpen] = React.useState(false);

    // const handleClick = () => {
    //     setOpen(!open);
    // };

    return(
         <List >
        <ListItemButton sx={{background: '#0000000a'}}>
            <ListItemIcon>
            <ListItemText sx={{ m: 1 }} primary={<Skeleton />} />
            </ListItemIcon>
            <ListItemText sx={{ m: 1 }} primary={<Skeleton />} />
            <ListItemText sx={{ m: 1 }} primary={<Skeleton />} />

            <ListItemIcon>
            <ListItemText sx={{ m: 1 }} primary={<Skeleton />} />
            </ListItemIcon>
        </ListItemButton>
        {/* <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ pl: 4 }}>
                <Typography><Skeleton /></Typography>
            </Box>
        </Collapse> */}
    </List>)
     
    
}
