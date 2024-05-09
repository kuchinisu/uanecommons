import { connect } from "react-redux";
import Layout from "../../components/layout/Layout";

function Home () {
    return(
        <>
        <div>
            <Layout>
                <div>
                    <div className="flex justify-end space-x-0.5">
                        <div className="btn">Documentos</div>
                        <div className="btn">Imagenes</div>
                        <div className="btn">Audio</div>
                        <div className="btn">Video</div>
                    </div>

                    <div>
                        
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