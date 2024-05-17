import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import {get_articulo_destacado } from '../../redux/actions/articulos';

function ArticuloDestacado ({articulo_destacado}) {

    const dispatch = useDispatch(); 
    useEffect(() => {
        dispatch(get_articulo_destacado()); 
      }, [dispatch]);
 
    return (
        <div>
            {articulo_destacado ? 
            (
                <div>
                    {articulo_destacado.map((articulo) => 
                    <div className="border-info border-2 ">
                        <h2 className="bg-info text-white font-bold text-lg p-2">{articulo.nombre}</h2>
                                    
                        <li className="">
                            {articulo.descripcion}
                        </li>

                        
                    </div>
                    )}
                </div>
            ):(
                <div>no</div>
            )
            }
        </div>
    )
}

const mapStateToProps = state => ({
    articulo_destacado: state.articulos.articulo_destacado
});
 
export default connect(mapStateToProps, {

})(ArticuloDestacado)