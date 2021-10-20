import React from 'react'
import { useHistory, useParams } from 'react-router'
import useFetch from '../usefetch';

export default function BlogDetail() {
     
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/Blogs/' + id);
    const history = useHistory()
    const handleClick = () => {
        fetch('http://localhost:8000/Blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }

    return (
        <div className="blog-details">
            <h2>
                {isPending && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {blog && (
                    <article>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        <div>{blog.body}</div>
                        <button onClick={handleClick}>delete</button>
                    </article>
                )}
           </h2>
        </div>
    )
}
