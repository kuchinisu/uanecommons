import { connect, useDispatch } from "react-redux"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { get_imagen } from "../../redux/actions/imagenes";
import Layout from "../../components/layout/Layout";
import { Tabla } from "../../components/display/Tabla";
import { descargarDatos } from "../../components/acciones/descargas/DescargarDatos";
import { LicenciaCard } from "../../components/display/LicenciaCard";

function Imagen ({imagen}) {
    const params = useParams()
    const slug = params.slug

    const dispatch = useDispatch(); 
    useEffect(() => {
        dispatch(get_imagen(slug));  
    }, [dispatch]);
    
    return(
        <>
        
        <Layout>
            <div>
                {imagen ? (
                    <div className="m-8">
                        {imagen.map((img) => 
                        <div>
                            <h className="text-xl md:text-3xl font-serif">{img.nombre}</h>
                            <div className="divider"></div>
                            <div className="3/4 md:w-1/2 h-auto">
                                <img src={`http://127.0.0.1:8000/${img.img}`}/>
                            </div>

                            <div className="divider"></div>
                            
                            <div>
                                <div className="">
                                    <Tabla elemento={img}/>

                                </div>
                                
                            </div>

                            <div className="btn m-5" onClick={()=>descargarDatos('img',img)}>
                                descargar datos
                            </div>

                            <div className="divider"></div>

                            <LicenciaCard elemento={img}/>
                            
                        </div>
                        )}
                    </div>
                ):(
                    <div>
                        
                    </div>
                )}
            </div>
        </Layout>
        
        </>
    )
    
};

const mapStateToProps = state =>({
    imagen: state.imagenes.imagen
})

export default connect(mapStateToProps, {

})(Imagen)