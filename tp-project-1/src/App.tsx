import React, {useState} from 'react';
import './App.css';
import PostsList from './components/PostsList';
import { Post } from './utils';

function App() {
  const [posts, setposts] = React.useState<Post[]>([])
  const [numberOfPosts, setNomberOfPosts] = React.useState<string>('');
  const [slicedPosts, setslicedPosts] = React.useState<Post[]>([])
  const [errors, setErrors] = React.useState('')

  React.useEffect(() => {
    console.log('Hello');

    if (posts.length <= 0) {
      console.log(slicedPosts)
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((json: Post[]) => {
          json.map(post => {
           post = {
             id: post.id,
             userId: post.userId,
             title: post.title,
             body: post.body,

           }
          })
          setposts(json)
        })
        .then(() => console.log(posts));
    }
  }, [slicedPosts, posts])

  const fetchPosts = () => {
    if (!numberOfPosts || parseInt(numberOfPosts) === 0) {
      setErrors("Erreur !!!!!")
    }
    else {
      setslicedPosts(() => {
        const sliced = posts.slice(0, Number(numberOfPosts));
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
