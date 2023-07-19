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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus risus dignissim, hendrerit 
                augue sed, viverra tortor. Cras a condimentum est, vel tristique mi. In hac habitasse platea dictumst.
                 Proin tristique tortor sodales, dapibus metus at, consectetur ante. Nulla et massa dolor. Ut purus 
                 felis, fringilla interdum diam porta, porttitor porttitor diam. Maecenas at neque sed diam tincidunt
                 lum tristique diam enim, vel vulputate purus posuere ac. Vestibulum eu diam rutrum orci gravida aliquam.

                Mauris in tortor non mauris dapibus scelerisque. Sed et tincidunt purus. Curabitur risus urna, sodales in fringilla vel, 
                hendrerit vel lorem. Aenean vulputate erat nec odio ullamcorper vestibulum. Morbi eget imperdiet nisl. Pellentesque non felis 
                fermentum, pellentesque sem sit amet, fermentum felis. Mauris diam nulla, bibendum non mi sed, pretium commodo purus.
               e cubilia curae; Suspendisse dictum blandit ipsum quis finibus. Aenean hendrerit condimentum. 
               
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