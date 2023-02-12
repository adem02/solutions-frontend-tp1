import React from 'react'
import {User} from "../models/User";
import {Box, Typography} from "@mui/material";
import {getDistance} from "../utils/distance";

type Props = {
    user: User;
    others: User[];
}

const Range: React.FC<Props> = (props) => {
    return (
        <Box>
            <Typography variant={'h2'}>Distances</Typography>
            {
                props.others.map(otherUser => (
                    <div key={otherUser.id}>
                        Distance qui sépare {props.user.name} de {otherUser.name}: {getDistance(props.user.geo!, otherUser.geo!)}
                    </div>
                ))
            }
        </Box>
    )
}

export default Range;