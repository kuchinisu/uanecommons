import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { get_lista_de_documentos } from "../../redux/actions/documentos";
import { Link } from "react-router-dom";

function ListaDeDocumentos({lista_de_documentos}) {
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(get_lista_de_documentos());
    },[dispatch]);

    return(
        <div>
            {lista_de_documentos ? (
                <div className="grid grid-cols-2 md:grid-cols-7 gap-2 justify-center">
                    {lista_de_documentos.map((documento)=>
                        <div>
                            <Link to={`/documento/${documento.slug}`}>
                                <div className="border-base-300 border-2 p-2 flex justify-center">
                                    <img src={`${process.env.REACT_APP_API_URL}/static/icon/documento-firmado.png`}/>
                                </div>
                            </Link>
                            
                            <div>
                                <Link to={`/documento/${documento.slug}`}>
                                    <div>
                                        {documento.nombre}
                                    </div>
                                </Link>
                        </div>
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
    lista_de_documentos: state.documentos.lista_de_documentos,
});

export default connect(mapStateToProps, {

})(ListaDeDocumentos);