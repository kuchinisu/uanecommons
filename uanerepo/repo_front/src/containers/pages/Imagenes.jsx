import { connect } from 'react-redux'
import Layout from '../../components/layout/Layout';
import { Head } from '../../components/Img/Head';
import Categorias from '../../components/Img/Categorias';
import ImagenesV from '../../components/Img/Imagenes';

function Imagenes () {
    return(
        <>
        <div>
            <Layout>
                <div className='p-5'>
                    <Head/>
                    <Categorias/>
                    <ImagenesV/>
                </div>
                
            </Layout>
        </div>
        </>
    )
};


const mapStateToProps = state => ({
  });

export default connect(mapStateToProps, {

})(Imagenes);