import React from 'react'
import {Box, Typography} from '@mui/material'


const TopBar = () => {
    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            <Box display="flex" alignItems="center" borderRadius="3px">
                <Typography sx={{ml: 2, flex: 1}} variant={'h2'}>Solutions frontend (TP)</Typography>
            </Box>
        </Box>
    )
}

export default TopBar
