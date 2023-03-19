import React from 'react'
import { User } from "../models/User";
import { Box, useTheme } from "@mui/material";
import { getDistance } from "../utils/distance";
import { tokens } from '../theme';

type Props = {
    user: User;
    others: User[];
}

const Range: React.FC<Props> = (props) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box>
            {
                props.others.map(otherUser => (
                    <div key={otherUser.id}>
                        <i>Distance qui sépare <b>{props.user.name}</b> de <b>{otherUser.name}</b></i>: <span style={{ color: colors.greenAccent[700] }}>{getDistance(props.user.geo!, otherUser.geo!)}km</span>
                    </div>
                ))
            }
        </Box>
    )
}

export default Range;