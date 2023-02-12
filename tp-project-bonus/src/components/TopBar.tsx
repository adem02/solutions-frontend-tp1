import React, { useContext } from 'react'
import {Box, IconButton, useTheme, InputBase, Typography} from '@mui/material'
import {
    LightModeOutlined as LightModeOutlinedIcon,
    DarkModeOutlined as DarkModeOutlinedIcon,
    Search as SearchIcon,
    NotificationAddOutlined as NotificationAddOutlinedIcon,
    Person2Outlined as Person2OutlinedIcon,
    SettingsOutlined as SettingsOutlinedIcon,
} from '@mui/icons-material';
import { ColorModeContext, tokens } from '../theme';


const TopBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            <Box display="flex" alignItems="center" borderRadius="3px">
                <Typography sx={{ml: 2, flex: 1}} variant={'h2'}>Solutions frontend (TP)</Typography>
            </Box>

            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ?
                        (<DarkModeOutlinedIcon />) :
                        (<LightModeOutlinedIcon />)
                    }
                </IconButton>
                <IconButton>
                    <NotificationAddOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <Person2OutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default TopBar
