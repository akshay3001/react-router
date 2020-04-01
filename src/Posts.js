import React, {useState, useEffect} from 'react'
import {Link, useRouteMatch} from 'react-router-dom'

function Posts() {
    // useRouteMatch hook to get current url
    const route = useRouteMatch();
    // useState hook
    const [posts, setPosts] = useState([]);

    // useEffect hook to fetch post data from API
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                return response.json()
            })
            .then(post => {
                console.log(post);
                setPosts(post);
            });

            return () => {
                console.log('Destroying Posts Component');
            }

    }, []);

    return (
        <div>
            <ul>
                { posts.map(post => <Link to={`${route.url}/details/${post.id}`}><li key={post.id}>{post.title}</li></Link>)}
            </ul>
        </div>
    )
}

export default Posts
