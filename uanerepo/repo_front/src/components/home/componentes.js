import { Link } from "react-router-dom";

export const botonesDeCategorias = (

    <div className="flex justify-end space-x-0.5">
        <Link to={"/documentos"}>
            <div className="btn">Documentos</div>
        </Link>
        
        <Link to={"/imagenes"}> 
            <div className="btn">Imagenes</div>
        </Link>
        
        <Link to={"/audios"}>
            <div className="btn">Audio</div>
        </Link>

        <div className="btn">Video</div>
    </div>

);