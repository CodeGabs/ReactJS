import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'
export default function NavBar() {
    return (
        <header class="header">

            <div class="headerMenu">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="index.html"> <img src="/images/logoriviss.png" alt="logo riviss" />
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active"><a class="nav-link" href="index.html">Inicio</a></li>
                            <li class="nav-item"><a class="nav-link" href="Relojes.html">Relojes</a></li>
                            <li class="nav-item"><a class="nav-link" href="Joyas.html"> Joyas</a></li>
                            <li class="nav-item"><a class="nav-link" href="Promociones.html"> Promociones</a></li>
                            <li class="nav-item"><a class="nav-link" href="Contáctanos.html"> Contáctanos</a></li>
                            <li><CartWidget /></li>

                        </ul>

                        

                    </div>
                </nav>
            </div>

        </header>
    )
}