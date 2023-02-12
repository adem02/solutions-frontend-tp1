import React from 'react'
import {PostComments} from "../models/PostComments";
import {Box, Typography, useTheme} from "@mui/material";
import PostCard from "./PostCard";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import {tokens} from "../theme";

type Props = {
    data: PostComments
}

const CommentsPerPostCard: React.FC<Props> = (props) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <Card sx={{ minWidth: 275, margin: '10px 0', color: colors.greenAccent["400"] }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color={colors.grey["100"]} gutterBottom>
                    Post: {props.data.postId}
                </Typography>
                <Typography variant="body2">
                    Number of comments: {props.data.numberOfComments}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CommentsPerPostCard;