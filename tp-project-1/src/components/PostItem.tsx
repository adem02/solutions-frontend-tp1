import React from 'react'

type Props = {
    userId: number;
    id: number;
    title: string;
    body: string;
    occurences?: number
}

const PostItem: React.FC<Props> = (props) => {
    return (
        <div key={props.id} className='post-item-paper'>
            <p>userId: {props.userId}</p>
            <p>id: {props.id}</p>
            <p>title: {props.title}</p>
            <p>body: {props.body}</p>
            <p>Occurrences de 'e': {props.occurences}</p>
        </div>
    )
}

export default PostItem