export const Licencias = (licencia) => {
    switch(licencia){
        case "CC BY":
            return( 
                <div>
                    <p className="font-serif font-bold text-3xl">CC BY</p>
                    <div className="divider"></div>
                    <h className="font-serif text-xl">Eres libre de: </h>
                    <li>mezclar, editar y modificar</li>
                    <li>compartir y distribuir dentro de trabajos propios o por si mismo</li>
                    <h className="font-serif text-xl">Bajo las condiciones de:</h>
                    <li>atribucion al autor original</li>
                </div>
            )
        case "CC BY-SA":
            return( 
                <div>
                    <p className="font-serif font-bold text-3xl">CC BY-SA"</p>
                    <div className="divider"></div>
                    <h className="font-serif text-xl">Eres libre de: </h>
                    <li>mezclar, editar y modificar</li>
                    <li>compartir y distribuir dentro de trabajos propios o por si mismo</li>
                    <h className="font-serif text-xl">Bajo las condiciones de:</h>
                    <li>atribucion al autor original</li>
                    <li>compartir bajo las mismas condiciones</li>
                </div>
            )
        
            case "CC BY-ND":
            return( 
                <div>
                    <p className="font-serif font-bold text-3xl">CC BY-ND</p>
                    <div className="divider"></div>
                    <h className="font-serif text-xl">Eres libre de: </h>
                    <li>compartir y distribuir</li>
                    <h className="font-serif text-xl">Bajo las condiciones de:</h>
                    <li>atribucion al autor original</li>
                    <li>usar en su forma original, sin modificaciones, mezcla, ediciones ni ningún otro</li>
                    <li>cualquier uso debe ser identico al original</li>
                </div>
            )
            
            case "CC BY-NC":
            return( 
                <div>
                    <p className="font-serif font-bold text-3xl">CC BY-NC</p>
                    <div className="divider"></div>
                    <h className="font-serif text-xl">Eres libre de: </h>
                    <li>compartir y distribuir</li>
                    <li>modificar, mezclar o editar</li>
                    <h className="font-serif text-xl">Bajo las condiciones de:</h>
                    <li>atribucion al autor original</li>
                    <li>no usar bajo ningun fin comercial</li>
                </div>
            )
            
            case "CC BY-NC-SA":
            return( 
                <div>
                    <p className="font-serif font-bold text-3xl">CC BY-NC-SA</p>
                    <div className="divider"></div>
                    <h className="font-serif text-xl">Eres libre de: </h>
                    <li>compartir y distribuir</li>
                    <li>modificar, mezclar o editar</li>
                    <h className="font-serif text-xl">Bajo las condiciones de:</h>
                    <li>atribucion al autor original</li>
                    <li>no usar bajo ningun fin comercial</li>
                    <li>compartir bajo las mismas condiciones</li>
                </div>
            )
            
            case "CC BY-NC-ND":
            return( 
                <div>
                    <p className="font-serif font-bold text-3xl">CC BY-NC-ND</p>
                    <div className="divider"></div>
                    <h className="font-serif text-xl">Eres libre de: </h>
                    <li>compartir y distribuir</li>
                    <h className="font-serif text-xl">Bajo las condiciones de:</h>
                    <li>atribucion al autor original</li>
                    <li>usar en su forma original, sin modificaciones, mezcla, ediciones ni ningún otro</li>
                    <li>cualquier uso debe ser identico al original</li>
                    <li>no usarlo bajo ningun fin comercial</li>
                </div>
            )
            
            case "CC0":
            return( 
                <div>
                    <p className="font-serif font-bold text-3xl">CC0</p>
                    <div className="divider"></div>
                    <h className="font-serif text-xl">Yo el autor de la obra renuncio a:</h>
                    <li>cualquier derecho sobre la obra, dejandolo al dominio publico</li>                    
                </div>
            )
        
        default:
            return (
            <div>

            </div>)
    }
}