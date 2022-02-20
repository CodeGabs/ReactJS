import React from 'react'
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const NavBar = () => {

    return (
        <header class="header">

            <div class="headerMenu">
                <nav class="navbar navbar-expand-lg navbar-light">
                    
                    <Link to='/'  class="navbar-brand">
                    <img src="/images/logoriviss.png" alt="logo riviss"></img>
                    </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        
                        <ul class="navbar-nav">
                            <li class="nav-item active"><Link to='/productos/relojes' className='header-link'>Relojes</Link></li>
                            <li class="nav-item active"><Link to='/productos/joyas' className='header-link'>Joyas</Link></li>
                            <li class="nav-item active"><Link to='/productos/promociones' className='header-link'>Promociones</Link></li>
                            <li><CartWidget /></li>

                        </ul>

                    </div>
                </nav>
            </div>

        </header>
    )

}
