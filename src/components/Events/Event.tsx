import * as React from 'react'
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, Typography } from '@mui/material';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Box } from '@mui/system';
import dateFormat from "dateformat";
import toast from 'react-hot-toast';


export default function Event({ event }: { event: any }) {

    const [open, setOpen] = React.useState(false);
    const [readed, setReaded] = React.useState(false);

    const handleClick = () => {
        if (!readed) {

            if (open) {
                setReaded(true)
                setOpen(false);
            } else {
                setOpen(true);
                setReaded(true)
            }
        } else {
            setOpen(false);
            toast.success('Event readed')
        }

    };

    return (
        <>
            <List >
                <ListItemButton sx={{ background: '#e5e5e5', color: `${readed && 'gray'}` }} onClick={handleClick}>
                    <ListItemIcon>
                        <EventAvailableIcon sx={{ color: `${readed && 'gray'}` }} />
                    </ListItemIcon>
                    <ListItemText sx={{ textTransform: 'capitalize' }} primary={event.name} />
                    <ListItemText sx={{ visibility: { xs: 'hidden', md: 'visible' } }} primary={dateFormat(event.time, "h:MM:ss TT dd, mmm, yyyy")} />

                    {open && <ExpandLess />}
                    {!open && (!readed ? <ExpandMore /> : '')}
                    {(open || readed) && <CheckBoxOutlinedIcon />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ pl: 4 }}>
                        <Typography sx={{visibility: {xs: 'visible', md: 'hidden'}}}>
                            {dateFormat(event.time, "h:MM:ss TT dd, mmm, yyyy")}
                        </Typography>
                        <Typography>{event.description}</Typography>
                    </Box>
                </Collapse>
            </List>
        </>
    )
}
