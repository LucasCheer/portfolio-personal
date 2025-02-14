import React from 'react'
import '../styles/sections/SectionAbout.css'
import imgAbout from '../assets/images/img-about.svg'

export default function SectionABout() {
    return (
        <section id='section-about' className='section-about'>
            <figure className="photo-about-me">
                <img src={imgAbout} alt="Programador" />
            </figure>
            <div className="container-about-me">
                <h2 className="title about-title">Sobre mí<span className="point">.</span></h2>

                <p className="about-me-text">
                    ¡Hola! 😊 <br />
                    Mi nombre es <span className="resaltar">Lucas Chero</span> y soy un apasionado <span className="resaltar">Desarrollador Full-Stack</span>. Actualmente, estoy cursando la carrera de Sistemas en la <span className="resaltar">Universidad de Buenos Aires</span>, donde he adquirido una sólida base de conocimientos en desarrollo de software y tecnologías de la información.
                </p>
                <br />
                <p className="about-me-text">
                    Mi objetivo es escribir código que sea seguro, escalable y limpio. Me considero una persona analítica, que siempre busca mejorar y <span className="resaltar">aprender nuevas tecnologías</span>.
                </p>
                <br />
                <p className="about-me-text">
                    Si te gustaría conocer más sobre mí o discutir posibles colaboraciones, no dudes en ponerte en contacto. <span className="resaltar">¡Será un placer conectar contigo!</span>
                </p>
            </div>
        </section>
    )
}
