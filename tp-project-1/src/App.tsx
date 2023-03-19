import React, { useState } from 'react';
import './App.css';
import PostsList from './components/PostsList';
import { Post } from './utils';
import { getOccurrenceOf } from "./services";

function App() {
    const [posts, setPosts] = React.useState<Post[]>([])
    const [numberOfPosts, setNomberOfPosts] = React.useState<string>('');
    const [slicedPosts, setslicedPosts] = React.useState<Post[]>([])
    const [errors, setErrors] = React.useState('')
    const [total, setTotal] = useState(0)

    React.useEffect(() => {
        if (posts.length <= 0) {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then((json: Post[]) => setPosts(json))
        }
    }, [slicedPosts, posts])

    const fetchPosts = () => {
        setTotal(0);
        if (!numberOfPosts || parseInt(numberOfPosts) === 0) {
            setErrors("Entre un nombre de post(s) valide")
            setslicedPosts([]);
        }
        else {
            setslicedPosts(() => {
                let sliced = posts.slice(0, Number(numberOfPosts));
                sliced = sliced.map(post => {
                    setTotal(prv => prv + getOccurrenceOf('e', post.title))
                    return {
                        id: post.id,
                        userId: post.userId,
                        title: post.title,
                        body: post.body,
                        occurrence: getOccurrenceOf('e', post.title)
                    }
                })
                setErrors('')
                return sliced;
            });
        }
    }



    return (
        <div className="App">
            <h1>Nombre de e dans chaque titre de post</h1>
            <p>Formulaire de saisie</p>
            <div className="form">
                <label htmlFor="post">Nombre de post(s): </label>
                <p style={{ color: "red" }}>{errors}</p>
                <input value={numberOfPosts} onChange={(e) => setNomberOfPosts(e.target.value)} type="number" id="post" className="post" />
                <input type="submit" value="Calculer" className="submitPost" onClick={fetchPosts} />
            </div>
            <p>
                {total > 0 && <span>{total / slicedPosts.length}</span>}
            </p>
            {
                slicedPosts.length > 0 && <PostsList posts={slicedPosts} />
            }
            <div>
                <p className="message"></p>
            </div>
        </div>
    );
}

export default App;
