import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { useParams } from "react-router-dom";
import { get_audio_slug } from "../../redux/actions/audios";
import { Tabla } from "../../components/display/Tabla";
import { LicenciaCard } from "../../components/display/LicenciaCard";

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
                                    
                                    <div className='m-5'>

                                        <Tabla elemento={audio}/> 

                                        <div className="btn m-5">Descargar datos</div>
                                    </div>

                                    <div className="divider"></div>
                                    
                                    <div className="m-5">
                                        <LicenciaCard elemento={audio}/>
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