import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfound() {
    return (
        <div>
            <h2>Sorry page not found</h2>
            <p>{ <Link to="/"> go back to HomePage</Link> }</p>
        </div>
    )
}

