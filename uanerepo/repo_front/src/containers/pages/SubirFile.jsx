import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import Cabeza from "../../components/acciones/subirArchivo/Cabeza";
import Formulario from "../../components/acciones/subirArchivo/Formulario";


function SubirFile() {
    return (
    <>
    <div>
        <Layout>
            <div className="p-5">
                <Cabeza/>
                <div className="flex justify-center w-full">
                    <Formulario/>
                </div>
                
            </div>
        </Layout>
    </div>
    
    </>
    )
}

const mapStateToProps = state =>({

});

export default connect(mapStateToProps, {

})(SubirFile);