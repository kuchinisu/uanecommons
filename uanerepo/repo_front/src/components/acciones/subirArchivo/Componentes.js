export const EntradaDeArchivo = ({tipo}) =>{
    
    const selectorArchivo = (
        <select className="select select-ghost w-full max-w-xs" onChange={(event) => tipoSeleccionado(event.target.value)}>
            <option disabled selected>Seleccionar el tipo de archivo</option>
            <option>Imagen</option>
            <option>Audio</option>
            <option>Documento</option>
            <option>Video</option>
        </select>
    
    );

    const tipoSeleccionado = (tipo) => {
        const inputput = document.getElementById('input_archivo');
        const previsualizar = document.getElementById('previsualizar');
        
        inputput.className = 'mt-2';
        
        const contenedorPrev = document.getElementById('contenedor_prev');
        
        if (contenedorPrev) {
            previsualizar.removeChild(contenedorPrev);
        }
    
        const nuevoContenedor = document.createElement('div');
        nuevoContenedor.id = 'contenedor_prev';
    
        switch(tipo){
            case "Imagen":
                // Crear un elemento de imagen
                const imagen = document.createElement('img');
                imagen.src = 'ruta/a/la/imagen.jpg'; // Ajusta la ruta de la imagen
                nuevoContenedor.appendChild(imagen);
                break;
            case "Audio":
                // Crear un elemento de audio
                const audio = document.createElement('audio');
                audio.src = 'ruta/al/audio.mp3'; // Ajusta la ruta del archivo de audio
                nuevoContenedor.appendChild(audio);
                break;
            case "Documento":
                nuevoContenedor.innerText = tipo;
                break;
            case "Video":
                nuevoContenedor.innerText = tipo;
                break;
            default:
                nuevoContenedor.innerText = "s";
        };
    
        previsualizar.appendChild(nuevoContenedor);
    }
    
    

    return (
        <div>
            {selectorArchivo}
            <div className="hidden" id="input_archivo">
                <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
            </div>

            <div id="previsualizar">
                <div id="contenedor_prev">

                </div>
            </div>
        </div>
    )
};
