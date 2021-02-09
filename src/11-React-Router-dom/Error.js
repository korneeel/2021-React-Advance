import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <h2>Error page</h2>
            <Link to="/" className="btn">Back to home</Link>
        </>
    )
}
export default Error