import { connect, useDispatch } from "react-redux"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { get_imagen } from "../../redux/actions/imagenes";
import Layout from "../../components/layout/Layout";

import JSZip from 'jszip';

function Imagen ({imagen}) {
    const params = useParams()
    const slug = params.slug

    const dispatch = useDispatch(); 
    useEffect(() => {
        dispatch(get_imagen(slug)); 
    }, [dispatch]);
    
    const descargarDatos = (img) => {
        const zip = new JSZip();
    
        fetch(`${process.env.REACT_APP_API_URL}${img.img}`)
            .then(response => response.blob())
            .then(imgBlob => {
                zip.file(`${img.nombre}.jpg`, imgBlob, { binary: true });
    
                const json = { 
                    nombre: img.nombre,
                    etiqueta: img.subtitulo,
                    descripcion: img.descripcion,
                    autor: img.autor,
                    categoria:img.categoria,
                    destacado: img.destacado,
                    licencia: img.licencia,
                    fecha_de_suibido: img.fecha_de_suibido,
                    slug: img.slug

                };
                zip.file('info.json', JSON.stringify(json));
    
                zip.generateAsync({ type: 'blob' })
                    .then(zipBlob => {
                        const url = window.URL.createObjectURL(zipBlob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = `${img.nombre}.zip`;
                        a.click();
                        window.URL.revokeObjectURL(url);
                    });
            });
    };
    
    
    
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
                                    <table className="table-auto border-collapse w-full rows">
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2 font-semibold text-gray-700 bg-careers">Nombre:</td>
                                                <td className="px-4 py-2">{img.nombre}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-semibold text-gray-700">Etiqueta:</td>
                                                <td className="px-4 py-2">{img.subtitulo}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-semibold text-gray-700">Descripción:</td>
                                                <td className="px-4 py-2">{img.descripcion}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-semibold text-gray-700">Autor:</td>
                                                <td className="px-4 py-2">{img.autor}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-semibold text-gray-700">Categoría:</td>
                                                <td className="px-4 py-2">{img.categoria}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-semibold text-gray-700">Destacado:</td>
                                                <td className="px-4 py-2">{img.destacado ? "Sí" : "No"}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-semibold text-gray-700">Público:</td>
                                                <td className="px-4 py-2">{img.publico ? "Sí" : "No"}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-semibold text-gray-700">Licencia:</td>
                                                <td className="px-4 py-2">{img.licencia}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-semibold text-gray-700">Fecha de Subida:</td>
                                                <td className="px-4 py-2">{img.fecha_de_suibido}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-semibold text-gray-700">Slug:</td>
                                                <td className="px-4 py-2">{img.slug}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                </div>
                                
                            </div>
                            <div className="divider"></div>
                            
                            <div className="btn" onClick={()=>descargarDatos(img)}>
                                descargar datos
                            </div>
                            
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