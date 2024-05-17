import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { get_categorias } from "../../redux/actions/categorias";

function Categorias ({lista_de_categorias}) {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_categorias("audio"));
    }, [dispatch]);

    return (
        <div>
            {lista_de_categorias ? (
                <div>
                    {lista_de_categorias.map((categoria)=>
                        <div>
                            {categoria.nombre}
                        </div>
                    )
                }
                </div>
            ):(
                <div>
                    no hay categorias disponibles
                </div>
            )}
            <div className="divider"></div>
        </div>
    );
};

const mapStateToProps = state => ({
    lista_de_categorias: state.categorias.lista_de_categorias,
});

export default connect(mapStateToProps,{

})(Categorias)