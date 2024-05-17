import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { get_imagen_destacada } from '../../redux/actions/imagenes';
import { Link } from "react-router-dom";

function ImagenDestacada ({imagen_destacada}) {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_imagen_destacada()); 
      }, [dispatch]);
    ///w-3/4 md:w-2/6 h-auto

    return(
        <div>
            <div className="m-5">
                {imagen_destacada ? 
                    (
                        <div>
                            {imagen_destacada.map((imagen) =>

                            <div className="border-info border-2 ">
                                <h2 className="bg-info text-white font-bold text-lg p-2">{imagen.nombre}</h2>
                                <div className="p-5">  
                                <Link to={`/imagen/${imagen.slug}`}>
                                    <img src={`http://127.0.0.1:8000${imagen.img}`} alt={imagen.nombre} className="rounded-xl" />
                                </Link>
                                </div>
                                <li className="ml-2">
                                    {imagen.subtitulo}
                                </li>
                            </div>
                            
                        )}
                        </div>
                    ):
                    (
                        <div>

                        </div>
                    )
                }

            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    imagen_destacada: state.imagenes.imagen_destacada
});
  
export default connect(mapStateToProps,{
    
})(ImagenDestacada)