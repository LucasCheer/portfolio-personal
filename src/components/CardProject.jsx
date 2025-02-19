import '../styles/components/CardProject.css';
import Pill from './Pill.jsx';


function CardProject({title, description, techs = [], imgProject, link, linkRepo}) {

    return (
        <article className="project-num">
            <figure className="photo-project">
                <a href={link} target='_blank'>
                    <img src={imgProject} alt="Imagen del proyecto" /></a>
            </figure>

            <div className="info-project">
                <h2>{title}</h2>
                <div className="tablet-container">
                    {techs.map((tech) => <Pill text={tech} />)} 
                </div>
                <p className="descrip-project">{description}</p>
            </div>

            <div className="btn-container">
                    <a className='btn-card' href={linkRepo} target='_blank'>
                        <img id='icon-git' className='icon-git' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Icono Git"/>Repositorio
                    </a>
                    <a className='btn-card' href={link} target='_blank'>
                        <img className='icon' src="https://static-00.iconduck.com/assets.00/create-link-icon-1024x1024-magrbcee.png" alt="Icono Link"/>Demo
                    </a>
            </div>
        </article>
    )
}

export default CardProject;