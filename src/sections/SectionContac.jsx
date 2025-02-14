import '../styles/sections/SectionContact.css';

function SectionContact() {
    return (
        <section id='section-contact' className="section-contact">
            <div id="contact-header">
                <h2 id="contact-title" className="title">Contacto<span className="point">.</span></h2>
                <h4 id="contact-subtitle" className="subtitle">Agendamos una reunión? ☕</h4>     
            </div>
            <form className="form" action="" method="GET">
                <label htmlFor="name">Ingresa tu nombre</label>
                <input 
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nombre y Apellido"
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="ejemplo@mail.com"
                    required
                />
                <label htmlFor="message">Mensaje</label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Escribe aquí tu consulta o mensaje..."
                    required>
                </textarea>
                <button type="submit" className="button btn-contact">Enviar</button>
            </form>
        </section>
    );
} 

export default SectionContact;
