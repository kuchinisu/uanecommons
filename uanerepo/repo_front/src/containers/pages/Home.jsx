import { connect } from "react-redux";
import Layout from "../../components/layout/Layout";
import ImagenDestacada from "../../components/home/ImagenDestacada";
import DocumentoDestacado from "../../components/home/DocumentoDestacado";
import { botonesDeCategorias } from "../../components/home/componentes";
import ArticuloDestacado from "../../components/home/ArticuloDestacado";

function Home () {
    return(
        <>
        <div>
            <Layout>
                <div>
                    {botonesDeCategorias}

                    <div name="destacados" className="mt-5">
                        <div name="superior" className="md:flex justify-center md:space-x-4">
                            <div className="w-3/4 md:w-1/2 h-auto">
                                <h2 className="text-2xl font-bold mb-3">Imagen Destacada</h2>
                                <ImagenDestacada/>
                            </div>

                            <div className="w-3/4 md:w-1/2 h-auto">
                                <div>
                                    <h2 className="text-2xl font-bold mb-3">Documento Destacado</h2>
                                    <DocumentoDestacado/>
                                </div>

                                <div className="mt-5">
                                    <h2 className="text-2xl font-bold mb-3">Articulo destacado</h2>
                                    <ArticuloDestacado/>
                                </div>
                            </div>
                        </div>
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

})(Home)