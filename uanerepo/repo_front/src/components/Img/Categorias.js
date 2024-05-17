import { connect, useDispatch } from "react-redux";
import { get_categorias } from "../../redux/actions/categorias";
import { useEffect } from "react";

function Categorias({lista_de_categorias}) {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(get_categorias("img"))
    },[dispatch])

    return (
        <div>
            {lista_de_categorias ? (
                <div>
                    {lista_de_categorias.map((categoria)=>
                        <div>
                            {categoria.nombre}
                        </div>
                    )}
                </div>
            ):(
                <div>

                </div>
            )}
            <div className="divider"></div>
        </div>
    );
}

const mapStateToProps = state => ({
    lista_de_categorias: state.categorias.lista_de_categorias
});

export default connect(mapStateToProps, {

})(Categorias);