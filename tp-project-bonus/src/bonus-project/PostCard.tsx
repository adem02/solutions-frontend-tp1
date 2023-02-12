import React from 'react'
import {User} from "../models/User";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Post} from "../models/Post";
import {useTheme} from "@mui/material";
import {tokens} from "../theme";

type Props = {
    post: Post,
    children?: React.ReactNode
}

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const PostCard: React.FC<Props> = (props) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <Card sx={{ minWidth: 275, margin: '10px 0', color: colors.greenAccent["400"] }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color={colors.grey["100"]} gutterBottom>
                    {props.post.title}
                </Typography>
                <Typography variant="body2">
                    {props.post.body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default PostCard;