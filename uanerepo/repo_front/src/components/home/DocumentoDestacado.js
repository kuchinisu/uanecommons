import { connect, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { get_documento_destacado } from "../../redux/actions/documentos";

function DocumentoDestacado ({documento_destacado}) {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_documento_destacado()); 
      }, [dispatch]);
 
    return(
        <div>
            <div className="">
                {documento_destacado ? 
                    (
                        <div>
                            {documento_destacado.map((documento) => 
                            <div className="border-info border-2 ">
                                <h2 className="bg-info text-white font-bold text-lg p-2">{documento.nombre}</h2>
                                
                                <li className="">
                                    {documento.subtitulo}
                                </li>

                                <div> {documento.descripcion} </div>
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
    documento_destacado: state.documentos.documento_destacado
});
  
export default connect(mapStateToProps,{
    
})(DocumentoDestacado)