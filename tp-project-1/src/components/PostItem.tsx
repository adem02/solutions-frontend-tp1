import React from 'react'

type Props = {
    userId: number;
    id: number;
    title: string;
    body: string;
    occurence?: number | string
}

const PostItem: React.FC<Props> = (props) => {
    return (
        <div key={props.id} className='post-item-paper'>
            <p>userId: {props.userId}</p>
            <p>id: {props.id}</p>
            <p>title: {props.title}</p>
            <p>body: {props.body}</p>
            <p>Occurrences de 'e' dans le titre: {props.occurence}</p>
        </div>
    )
}

export default PostItem