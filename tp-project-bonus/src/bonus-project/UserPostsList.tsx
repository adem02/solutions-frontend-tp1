import React from 'react'
import {Post} from "../models/Post";
import {Box, Typography} from "@mui/material";
import PostCard from "./PostCard";

type Props = {
    posts: Post[];
}
const UserPostsList: React.FC<Props> = (props) => {
    return (
        <React.Fragment>
            <Typography variant={'h2'}>User's posts</Typography>
            <Box sx={{height: '50vh', overflow: 'auto'}}>
                {
                    props.posts.map(post => <PostCard key={post.id} post={post}/>)
                }
            </Box>
        </React.Fragment>
    )
}

export default UserPostsList;