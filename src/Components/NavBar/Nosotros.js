import 'bootstrap/dist/css/bootstrap.min.css';

const Nosotros =()=>{
    return(
        <>
        <div className='portada'> 
            <div>
                <img className="img_portada" src="../img/portada-cerveza.jpg" alt="imagen de portada" width ="100%"/>
            </div>
            <div>
                <p>
                Somos una joven y apasionada fábrica de cervezas artesanales, comprometida con la excelencia y la innovación. Nuestro equipo está lleno de entusiasmo y dedicación para crear cervezas únicas y sorprendentes. Nos motiva la búsqueda constante de sabores originales y la experimentación con ingredientes de calidad.
                En nuestra fábrica, cada lote de cerveza es elaborado con esmero y cuidado, siguiendo procesos artesanales que resaltan la personalidad de cada variedad. Nos enorgullece ofrecer una experiencia cervecera única, donde cada sorbo es una invitación al deleite.
                Valoramos el feedback de nuestros clientes y nos esforzamos por mejorar continuamente. Estamos emocionados por crecer y compartir nuestra pasión por la cerveza artesanal con cada amante de esta bebida.
                ¡Únete a nosotros en este emocionante viaje cervecero y descubre la magia de nuestras cervezas artesanales! ¡Salud!
                </p>
            </div>
        </div>  
        <div className='iconos'>
            <div>
                <img className='icono' src='../img/tienda.png' alt='imagen de icono'/>
                <div>
                    <p className='parrafo'>Acércate a nuestro local y conoce nuestra fábrica.</p>
                </div>
            </div>
            <div>
                <img className='icono' src='../img/icono_disfruta.png' alt='imagen de icono'/>
                <div>
                    <p className='parrafo'>Compártela con tus amigos.</p>
                </div>
            </div>
            <div>
                <img className='icono' src='../img/icono_eventos.png' alt='imagen de icono'/>
                <div>
                    <p className='parrafo'>Sigue nuestras redes y entérate de los mejores eventos.</p>
                </div>
            </div>
            <div>
                <img className='icono' src='../img/icono_promociones.png' alt='imagen de icono'/>
                <div>
                    <p className='parrafo'>Cada semana lanzamos una nueva promoción, no te la pierdas.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Nosotros;