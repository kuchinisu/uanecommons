import { connect, useDispatch } from "react-redux";
import { get_categorias } from "../../redux/actions/categorias";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Categorias({lista_de_categorias}) {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(get_categorias("img"))
    },[dispatch])

    return ( 
        <div className="">

            <div>
                {lista_de_categorias ? (
                    <div className="grid grid-cols-2 md:grid-cols-7 gap-2 justify-center">
                        {lista_de_categorias.map((categoria)=>
                            <div>
                                <Link to={`/por_categoria/img/${categoria.nombre}`}>
                                    {categoria.nombre}
                                </Link>
                            </div>
                        )}
                    </div>
                ):(
                    <div>

                    </div>
                )}
            </div>
            <div className="divider"></div>
        </div>
    );
}

const mapStateToProps = state => ({
    lista_de_categorias: state.categorias.lista_de_categorias
});

export default connect(mapStateToProps, {

})(Categorias);