import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { useParams } from "react-router-dom";
import { get_audio_slug } from "../../redux/actions/audios";

function Audio ({audio_slug}) {
    const params = useParams();
    const slug = params.slug;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_audio_slug(slug));
    },[dispatch, slug])

    return(
        <>
            <div>
                <Layout>
                    <div> 
                        <h className="text-3xl font-serif">Audio: {slug}</h> 
                        <div className="divider"></div>
                    </div>
                    {audio_slug ? (
                        <div>
                            {audio_slug.map((audio)=>
                                <div>
                                    <div>
                                        <h className="text-xl font-serif">{audio.nombre}</h>
                                    </div>
                                    <audio controls className="w-full mb-2">
                                        <source src={`${process.env.REACT_APP_API_URL}${audio.archivo_audio}`} type="audio/mpeg" />
                                        Tu navegador no soporta 💅
                                    </audio>
                                    <div className="divider"></div>
                                    <div>
                                        <table className="table-auto border-collapse w-full rows border border-yellow-400 p-4 rounded-lg shadow-lg m-10">
                                            <tbody>
                                                <tr>
                                                    <td className="px-4 py-2 font-semibold text-gray-700 bg-careers">Nombre:</td>
                                                    <td className="px-4 py-2">{audio.nombre}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 font-semibold text-gray-700">Etiqueta:</td>
                                                    <td className="px-4 py-2">{audio.subtitulo}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 font-semibold text-gray-700">Descripción:</td>
                                                    <td className="px-4 py-2">{audio.descripcion}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 font-semibold text-gray-700">Autor:</td>
                                                    <td className="px-4 py-2">{audio.autor}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 font-semibold text-gray-700">Categoría:</td>
                                                    <td className="px-4 py-2">{audio.categoria}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 font-semibold text-gray-700">Destacado:</td>
                                                    <td className="px-4 py-2">{audio.destacado ? "Sí" : "No"}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 font-semibold text-gray-700">Público:</td>
                                                    <td className="px-4 py-2">{audio.publico ? "Sí" : "No"}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 font-semibold text-gray-700">Licencia:</td>
                                                    <td className="px-4 py-2">{audio.licencia}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 font-semibold text-gray-700">Fecha de Subida:</td>
                                                    <td className="px-4 py-2">{audio.fecha_de_suibido}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 font-semibold text-gray-700">Slug:</td>
                                                    <td className="px-4 py-2">{audio.slug}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="btn m-5">Descargar datos</div>
                                    </div>
                                    <div className="divider"></div>
                                    
                                    <div className="p-4 bg-gray-100 rounded-lg shadow-md mt-4">
                                        <h2 className="font-serif text-2xl mb-2">Licencia</h2>
                                        <div className="divider mb-4"></div>
                                        <div className="border border-yellow-400 p-4 rounded-lg bg-white">
                                            {audio.licencia ? (
                                                <div className="text-green-600 font-semibold">Sí</div>
                                            ) : (
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
                                            )}
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
    audio_slug: state.audios.audio_slug
});

export default connect(mapStateToProps, {

})(Audio)