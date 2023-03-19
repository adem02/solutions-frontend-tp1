import React from 'react'
import { Post } from "../models/Post";
import { Box } from "@mui/material";
import PostCard from "./PostCard";

type Props = {
    posts: Post[];
}
const UserPostsList: React.FC<Props> = (props) => {
    return (
        <React.Fragment>
            <Box sx={{ height: '50vh', overflow: 'auto' }}>
                {
                    props.posts.map(post => <PostCard key={post.id} post={post} />)
                }
            </Box>
        </React.Fragment>
    )
}

export default UserPostsList;