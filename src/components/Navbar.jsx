import React from 'react'
import '../css/navbar.css'

export default function Navbar() {
    return (
        <>
            <nav className='nav'>
                <div className='logo'>
                    <img src="./logo.jpeg" width={50} alt="logo" />
                    <h2>Brainy Sensei</h2>
                </div>
                <div className='list'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
                    </ul>
                    <button className='btn'>Get In Touch</button>
                </div>
            </nav>
        </>
    )
}
