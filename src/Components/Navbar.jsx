import React from 'react'
import { List } from '../Style Component/First'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar-control'>
        <nav className='container'>
        <div className='logo'>
            The Rick and Morty
        </div>
        <ul>
            <List><Link to={"/"} className="text-decoration-none link">Home</Link></List>
            <List><Link to={"/location"} className="text-decoration-none link">Location</Link></List>
            <List><Link to={"/episode"} className="text-decoration-none link">Episode</Link></List>
        </ul>
        </nav>
    </div>
  )
}
