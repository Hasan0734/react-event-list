import * as React from 'react'
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import Skeleton from 'react-loading-skeleton'
export default function EventSkeleton() {
    return (
        <List >
            <ListItemButton sx={{ background: '#0000000a' }}>

                <ListItemIcon>
                    <ListItemText sx={{ m: 1 }} primary={<Skeleton />} />
                </ListItemIcon>

                <ListItemText sx={{ m: 1 }} primary={<Skeleton />} />
                <ListItemText sx={{ m: 1 }} primary={<Skeleton />} />

                <ListItemIcon>
                    <ListItemText sx={{ m: 1 }} primary={<Skeleton />} />
                </ListItemIcon>
            </ListItemButton>
        </List>)


}
