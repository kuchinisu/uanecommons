import Layout from "../../components/layout/Layout"
import { Cabeza } from "../../components/docs/Cabeza"
import Categorias from '../../components/docs/Categorias'
import ListaDeDocumentos from "../../components/docs/ListaDeDocumentos"
import { connect } from "react-redux"
function Documentos(){
    return(
        <>
            <div>
                <Layout>
                    <div className="">
                        <Cabeza/>
                        <Categorias/>
                        <ListaDeDocumentos/>
                    </div>
                </Layout>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, {

})(Documentos);