import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Post } from "../models/Post";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

type Props = {
    post: Post,
    children?: React.ReactNode
}

const PostCard: React.FC<Props> = (props) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <Card sx={{ minWidth: 275, margin: '10px 0', color: colors.greenAccent["400"] }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color={colors.grey["100"]} gutterBottom>
                    {props.post.title}
                </Typography>
                <Typography variant="body2" color={colors.primary[200]}>
                    {props.post.body}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default PostCard;