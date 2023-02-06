import React from 'react'
import { Post } from '../utils'
import PostItem from './PostItem'
import { getOccurrenceOf } from '../services'

type Props = {
    posts: Post[]
}

const PostsList: React.FC<Props> = (props) => {
    return (
        <React.Fragment>
            {
                props.posts.map(post => (<PostItem key={post.id} userId={post.userId} id={post.id} title={post.title} body={post.body} occurences={getOccurrenceOf('e', post.title)} />))
            }
        </React.Fragment>
    )
}

export default PostsList