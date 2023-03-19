import React from 'react'
import { Box, Typography } from "@mui/material";
import { PostComments } from "../models/PostComments";
import CommentsPerPostCard from "./CommentsPerPostCard";
import { averageCommentsPerPost } from '../utils/averageCommentsPerPost';

type Props = {
    data: PostComments[];
}

const PostCommentsList: React.FC<Props> = (props) => {
    return (
        <React.Fragment>
            {props.data.length > 0 ? <Box sx={{ height: '50vh', overflow: 'auto', position: 'relative' }}>
                {<Box sx={{ height: '50px' }}>
                    <Typography variant="h2" color="text.secondary" align="center">Moyenne de commentaires par post: {averageCommentsPerPost(props.data)}</Typography>
                </Box>}
                {
                    props.data.map((data, index) => <CommentsPerPostCard key={index} data={data} />)
                }
            </Box> : null}
        </React.Fragment>
    )
}

export default PostCommentsList;