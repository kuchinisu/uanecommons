import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { get_lista_de_audios } from "../../redux/actions/audios";
import { Link } from "react-router-dom";

function AudiosLista ({lista_de_audios}) {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(get_lista_de_audios());
    }, [dispatch])
    return(
        <div>
            
            {lista_de_audios ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-1 justify-center">
                    {lista_de_audios.map((audio, index)=>
                        <div key={index} className="border border-yellow-400 p-4 rounded-lg shadow-lg bg-white">
                        
                        <Link to={`/audio/${audio.slug}`}>
                            <h3 className="text-xl font-semibold mb-2">{audio.nombre}</h3>
                        </Link>
                        
                        <audio controls className="w-full mb-2">
                            <source src={`${process.env.REACT_APP_API_URL}${audio.archivo_audio}`} type="audio/mpeg" />
                            Tu navegador no soporta 💅
                        </audio>
                        <p className="text-gray-600 mb-2"><strong>Subtítulo:</strong> {audio.subtitulo}</p>
                        <p className="text-gray-700"><strong>Descripción:</strong> {audio.descripcion}</p>
                    </div>
                    )}
                </div>
            ):(
                <div>
                    
                </div>
            )   
        }
        </div>
    );
};

const mapStateToProps = state => ({
 lista_de_audios: state.audios.lista_de_audios,
});

export default connect(mapStateToProps, {

})(AudiosLista)