import React from 'react'
import { Post } from '../utils'
import PostItem from './PostItem'

type Props = {
    posts: Post[]
}

const PostsList: React.FC<Props> = (props) => {
    return (
        <React.Fragment>
            {
                props.posts.map(post => (<PostItem key={post.id} userId={post.userId} id={post.id} title={post.title} body={post.body} occurence={post.occurrence} />))
            }
        </React.Fragment>
    )
}

export default PostsList