import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get_documento_slug } from '../../redux/actions/documentos';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import Layout from '../../components/layout/Layout';
import { Licencias } from '../../components/display/Licencias';

function Documento() {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const doc = useSelector(state => state.documentos.documento);

    useEffect(() => {
        dispatch(get_documento_slug(slug));
    }, [dispatch, slug]);

    return (
        <Layout>
            {doc ? (
                <div>
                    {doc.map((doc, index) => (
                        <div className='m-5'>   
                            <div key={index} style={{ height: '600px' }}>
                                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                                    <Viewer fileUrl={`${process.env.REACT_APP_API_URL}${doc.doc}`} />
                                </Worker>
                            </div>
                            <div className='divider'></div>
                            <div>
                            
                            <table className="table-auto border-collapse w-full rows">
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2 font-semibold text-gray-700 bg-careers">Nombre:</td>
                                                <td className="px-4 py-2">{doc.nombre}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-semibold text-gray-700">Etiqueta:</td>
                                                <td className="px-4 py-2">{doc.subtitulo}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-semibold text-gray-700">Descripción:</td>
                                                <td className="px-4 py-2">{doc.descripcion}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-semibold text-gray-700">Autor:</td>
                                                <td className="px-4 py-2">{doc.autor}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-semibold text-gray-700">Categoría:</td>
                                                <td className="px-4 py-2">{doc.categoria}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-semibold text-gray-700">Destacado:</td>
                                                <td className="px-4 py-2">{doc.destacado ? "Sí" : "No"}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-semibold text-gray-700">Público:</td>
                                                <td className="px-4 py-2">{doc.publico ? "Sí" : "No"}</td>
                                            </tr>
                                            
                                            <tr>
                                                <td className="px-4 py-2 font-semibold text-gray-700">Licencia:</td>
                                                <td className="px-4 py-2">{doc.licencia}</td>
                                            </tr>

                                            <tr>
                                                <td className="px-4 py-2 font-semibold text-gray-700">Fecha de Subida:</td>
                                                <td className="px-4 py-2">{doc.fecha_de_suibido}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-semibold text-gray-700">Slug:</td>
                                                <td className="px-4 py-2">{doc.slug}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                            </div>
                            <div className="p-4 bg-gray-100 rounded-lg shadow-md mt-4">
                        <h2 className="font-serif text-2xl mb-2">Licencia</h2>
                        <div className="divider mb-4"></div>
                        <div className="border border-yellow-400 p-4 rounded-lg bg-white">
                            {doc.licencia === " " || doc.licencia === "" ? (
                                <div className="space-y-2">
                                    <p className="font-semibold">Eres libre de:</p>
                                    <ul className="list-disc list-inside ml-4">
                                        <li>Compartir</li>
                                        <li>Mezclar</li>
                                    </ul>
                                    <p className="font-semibold mt-2">Bajo las siguientes condiciones:</p>
                                    <ul className="list-disc list-inside ml-4">
                                        <li>Atribución</li>
                                        <li>Compartir bajo la misma licencia</li>
                                    </ul>
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    {Licencias(doc.licencia)}
                                </div>
                            )}
                        </div>
                    </div>
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
