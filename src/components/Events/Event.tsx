import * as React from 'react'
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, Typography } from '@mui/material';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Box } from '@mui/system';
import dateFormat from "dateformat";


export default function Event({ event }: { event: any }) {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <List>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <EventAvailableIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ textTransform: 'capitalize' }} primary={event.name} />
                    <ListItemText primary={dateFormat(event.time, "h:MM:ss TT, dd, mmm, yyyy")}/>

                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{pl: 4}}>
                        <Typography>{event.description}</Typography>
                    </Box>
                </Collapse>
            </List>
        </>
    )
}
