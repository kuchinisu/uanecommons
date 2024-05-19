import Layout from "../../components/layout/Layout";
import Cabeza from "../../components/audio/Cabeza";
import Categorias from "../../components/audio/Categorias";
import AudiosLista from "../../components/audio/AudiosLista";

function Audios() {
    return(
        <>
            <div>
                <Layout>
                    <div className="m-5">
                        <Cabeza/>
                        <Categorias/>
                        <AudiosLista/>
                    </div>
                    
                </Layout>
            </div>
        </>
    );
};

export default Audios