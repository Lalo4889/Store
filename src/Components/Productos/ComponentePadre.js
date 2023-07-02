const ComponentePadre = ({children}) =>{
    return(
        <>
        <h1 className="subtitulo">NUESTRAS CERVEZAS</h1>
        <div className="grid">
            {children}
        </div>
        </>
    )
}

export default ComponentePadre;