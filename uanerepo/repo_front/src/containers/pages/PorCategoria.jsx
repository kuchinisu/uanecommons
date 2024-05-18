import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { get_obras_por_categoria } from "../../redux/actions/categorias";
import { Head } from '../../components/pcat/Head'; 

function PorCategoria ({lista_de_obras}) {
    const params = useParams();
    const categoria = params.categoria
    const api = params.api
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(get_obras_por_categoria(api, categoria));
    }, [dispatch])

    return (
        <>
        <div>
            
            <Layout>
                <Head api={api} categoria={categoria}/> 
                {lista_de_obras ? (
                    <div className="grid grid-cols-2 md:grid-cols-7 gap-2 justify-center">
                        {lista_de_obras.map((obra) => 
                            <div>
                                
                                <div className="border-base-300 border-2 p-2">
                                    <img src={`http://127.0.0.1:8000${obra.img}`}/>
                                </div>
                            
                            <div>
                                    <div>
                                        {obra.nombre}
                                    </div>
                                
                            </div>
                        </div>
                        )}
                    </div>
                ):(
                    <div>

                    </div>
                )}
            </Layout>
        </div>
        </>

    );
};

const mapStateToProps = state => ({
    lista_de_obras: state.categorias.lista_de_obras, 
});

export default connect (mapStateToProps, {

})(PorCategoria);