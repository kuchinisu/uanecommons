import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get_documento_slug } from '../../redux/actions/documentos';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import Layout from '../../components/layout/Layout';
import { Tabla } from '../../components/display/Tabla';
import { LicenciaCard } from '../../components/display/LicenciaCard';
import { descargarDatos } from '../../components/acciones/descargas/DescargarDatos';

function Documento() {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const doc = useSelector(state => state.documentos.documento);

    useEffect(() => {
        dispatch(get_documento_slug(slug));
    }, [dispatch, slug]);

    const descargarPDF = (urlpdf, nombre) => {
        fetch(`${process.env.REACT_APP_API_URL}${urlpdf}`)
            .then(response => response.blob())
            .then(pdfBlob => {
                const url = window.URL.createObjectURL(pdfBlob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${nombre}.pdf`; 
                a.click();
                window.URL.revokeObjectURL(url);
            }
            )
            .catch(error => {
                console.error('Error al descargar el PDF:', error);
            }
        );
    };
    

    return (
        <Layout>
            {doc ? (
                <div>
                    {doc.map((doc, index) => (
                        <div className='m-5'>   

                            <div className='bg-info-content p-5'>
                                <div className='flex justify-end'>
                                    <img className='m-2 btn btn-warning' onClick={()=>descargarPDF(doc.doc, doc.nombre)} src={`${process.env.REACT_APP_API_URL}/static/icon/descarga-de-archivos.png`}></img>
                                </div>
                                <div key={index} className="pdf-container bg-neutral" style={{height: '700px'}}>
                                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                                        <Viewer fileUrl={`${process.env.REACT_APP_API_URL}${doc.doc}`} />
                                    </Worker>
                                </div>
                            </div>
                            
                            
                            <div className='divider'></div>
                            <div>
                                <Tabla elemento={doc}/>
                                <div className='btn m-5' onClick={()=>descargarDatos('doc', doc)}>Descargar datos</div>
                            </div>
                            <LicenciaCard elemento={doc}/>
                            
                        </div>
                    ))}

                    
                </div>

            ) : (
                <div>Loading...</div>
            )}
        </Layout>
    );
}

export default Documento;
