import React from 'react'
import { tokens } from "../theme";
import { Typography, useTheme } from "@mui/material";

const UsersList = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Typography color={colors.redAccent[400]}>
            Hello
        </Typography>
    )
}

export default UsersList;