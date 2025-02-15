import React from 'react'
import '../styles/sections/SectionProjects.css'
import CardProject from '../components/CardProject'
import hein from '../assets/images/projects/hein.jpeg'
import pokedex from '../assets/images/projects/pokedex.jpeg'

export default function SectionProjects() {
  return (
    <section id='section-projects' className='section-projects'>
      <h2 id="title-project" className="title" >Proyectos<span className="point">.</span></h2>
      <div className="container-projects">
        <CardProject
          title="Hein"
          description="Plataforma de gestion y seguimiento emocional"
          techs={['Javascript', 'Sass', 'Node.js', 'Express']}
          imgProject={hein}
          link={"https://hein-emociones.netlify.app"}
          linkRepo={"https://github.com/LucasCheer/Hein"}
        />
        <CardProject
          title="Pokedex App"
          description="Pokedex informativa de Pokemons de distintos tipos"
          techs={['Javascript', 'React',]}
          imgProject={pokedex}
          link={"no disponible"}
          linkRepo={"https://github.com/LucasCheer/Pokedex-React"}
        />
      </div>
    </section>
  )
}