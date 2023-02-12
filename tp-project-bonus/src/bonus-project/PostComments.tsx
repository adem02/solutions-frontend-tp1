import React from 'react'
import {Post} from "../models/Post";
import {Box, Typography} from "@mui/material";
import PostCard from "./PostCard";
import {PostComments} from "../models/PostComments";
import CommentsPerPostCard from "./CommentsPerPostCard";

type Props = {
    data: PostComments[];
}

const PostCommentsList: React.FC<Props> = (props) => {
    return (
        <React.Fragment>
            <Typography variant={'h2'}>User's posts</Typography>
            <Box sx={{height: '50vh', overflow: 'auto'}}>
                {
                    props.data.map((data, index) => <CommentsPerPostCard key={index} data={data}/>)
                }
            </Box>
        </React.Fragment>
    )
}

export default PostCommentsList;