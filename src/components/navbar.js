import React from 'react'
import { Link } from 'react-router-dom'

export default function navbar() {
    return (
        <nav className="navbar">
            <h1 >the Dojo Blog</h1>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/create"  >new blog</Link>

            </div>
        </nav>
    )
}

