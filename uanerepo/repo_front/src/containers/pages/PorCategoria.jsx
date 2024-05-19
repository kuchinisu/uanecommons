import { connect, useDispatch } from "react-redux";
import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { get_obras_por_categoria } from "../../redux/actions/categorias";
import { Head } from '../../components/pcat/Head'; 


function PorCategoria({ lista_de_obras }) {
    const params = useParams();
    const categoria = params.categoria;
    const api = params.api;
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_obras_por_categoria(api, categoria));
    }, [dispatch, api, categoria]);

    const selectorApi = (obra) => {
        switch(api) {
            case 'img':
                return (
                    <div key={obra.id} className="border-base-300 border-2 p-2">
                        <img src={`http://127.0.0.1:8000${obra.img}`} alt={obra.nombre} />
                        <div>
                            <div>{obra.nombre}</div>
                        </div>
                    </div>
                );
            case 'doc':
                return (
                    <div key={obra.id}>
                        <Link to={`/documento/${obra.slug}`}>
                            <div className="border-base-300 border-2 p-2 flex justify-center">
                                <img src={`${process.env.REACT_APP_API_URL}/static/icon/documento-firmado.png`} alt="Documento" />
                            </div>
                        </Link>
                        <div>
                            <Link to={`/documento/${obra.slug}`}>
                                <div>{obra.nombre}</div>
                            </Link>
                        </div>
                    </div>
                );
            default:
                return <div key={obra.id}>ff</div>;
        }
    }

    return (
        <div>
            <Layout>
                <Head api={api} categoria={categoria}/> 
                {lista_de_obras ? (
                    <div className="grid grid-cols-2 md:grid-cols-7 gap-2 justify-center">
                        {lista_de_obras.map((obra) => (
                            <React.Fragment key={obra.id}>
                                {selectorApi(obra)}
                            </React.Fragment>
                        ))}
                    </div>
                ) : (
                    <div>No hay obras disponibles.</div>
                )}
            </Layout>
        </div>
    );
};


const mapStateToProps = state => ({
    lista_de_obras: state.categorias.lista_de_obras, 
});

export default connect (mapStateToProps, {

})(PorCategoria);