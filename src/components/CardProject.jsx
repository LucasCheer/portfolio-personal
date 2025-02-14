import '../styles/components/CardProject.css';
import Pill from './Pill.jsx';


function CardProject({title, description, techs = [], imgProject, link, linkRepo}) {

    return (
        <article className="project-num">
            <figure className="photo-project">
                <a href="#">
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
                    <a className='btn btn-projects btn-dark' href={linkRepo} target='_blank'>
                        <img id='icon-git' className='icon' src={iconGit} alt="Icono Git"/>Repositorio
                    </a>
                    <a className='btn btn-projects btn-dark' href={link} target='_blank'>
                        <img className='icon' src={iconLink} alt="Icono Link"/>Demo
                    </a>
            </div>
        </article>
    )
}

export default CardProject;