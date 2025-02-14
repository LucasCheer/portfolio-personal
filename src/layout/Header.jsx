import React from 'react'
import '../styles/layout/Header.css'
import foto from '../assets/images/profile-photo.jpg'
import arrowBottom from '../assets/images/arrow-bottom.svg'

export default function Header() {
    return (
        <header className='header'>
            <nav className="navbar glass-effect">
                <div className="navbar-container">
                    <a class="link logo" href="#"><h6 id="name-logo">Lucas<span id="point-logo" className="point">.</span>dev</h6></a>
                    <menu className="items">
                        <li><a className='link link-nav' href="#section-about">Sobre mí</a></li>
                        <li><a className='link link-nav' href="#section-projects" >Proyectos</a></li>
                        <li><a className='link link-nav' href="#section-contact">Contacto</a></li>
                    </menu>
                </div>
            </nav>
            <div className="hero">
                <div className="hero-container">
                    <h1 id="msj-welcome">Hola, soy Lucas Chero</h1>
                    <p id="web-developer">Desarrollador <span> de Software</span></p>
                    <p id="hero-subtitle" className="subtitle">Disfruto crear sitios y Aplicaciones Web<img className='world-img' src=""></img></p>  
                    <div className="btn-container">
                        <a href="https://www.linkedin.com/in/lucas-chero/" target="_blank">
                        <img src="https://img.icons8.com/ios11/512/linkedin.png" alt="Linkedin Logo" />
                        </a>
                        <a href="mailto:cherolucas2@gmail.com" target='_blank'>
                        <img src="https://e7.pngegg.com/pngimages/945/191/png-clipart-gmail-logo-computer-icons-gmail-scalable-graphics-email-gmail-size-icon-angle-text-thumbnail.png" alt="Gmail Logo" />
                        </a>
                        <a href="https://github.com/LucasCheer" target='_blank'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Github Logo" />
                        </a>
                    </div>
                </div>
                <figure className="photo-container">
                        <img src={foto} alt="Foto Perfil" width="190px" />
                </figure>
                <figure id="arrow-bottom">
                        <a href="#section-about" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                        <figcaption className="call-to-action">Desliza</figcaption>
                        <img src={arrowBottom} alt="Flecha abajo"/>
                        </a>
                </figure>
            </div>
        </header>
    )
}