import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='container'>
        <span className='text-primary h1 d-block'>Error <span className='text-danger'>405</span></span>
        <Link to="/" className='text-decoration-none h2 btn btn-primary'>Back to home page</Link>
    </div>
  )
}
