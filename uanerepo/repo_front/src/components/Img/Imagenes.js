import { connect, useDispatch } from "react-redux";
import { get_imagenes } from "../../redux/actions/imagenes";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ImagenesV({imagenes}) {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(get_imagenes())
    },[dispatch])

    return(
        <div>
            {imagenes? (
                <div className="grid grid-cols-2 md:grid-cols-7 gap-2 justify-center">
                    {imagenes.map((imagen)=> 
                        <div>
                            <Link to={`/imagen/${imagen.slug}`}>
                                <div className="border-base-300 border-2 p-2">
                                    <img src={`http://127.0.0.1:8000${imagen.img}`}/>
                                </div>
                            </Link>
                            
                            <div>
                                <Link to={`/imagen/${imagen.slug}`}>
                                    <div>
                                        {imagen.nombre}
                                    </div>
                                </Link>
                                
                            </div>
                        </div>
                    )}
                </div>
            ):(
                <div>

                </div>
        )}
        </div>
    )
};

const mapStateToProps = state => ({
 imagenes: state.imagenes.lista_de_imagenes
});

export default connect(mapStateToProps, {

})(ImagenesV)