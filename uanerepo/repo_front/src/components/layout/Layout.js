import { check_auth, load_user, refresh  } from '../../redux/actions/auth';
import { connect,} from "react-redux";
import {ToastContainer} from 'react-toastify'
import { useEffect } from "react";
import NavbarP from '../nav/NavbarP';
import { SideBar } from '../nav/SideBar';
import { Footer } from '../nav/Footer';

const Layout = (props) => {
    useEffect(()=>{
        props.refresh()
        props.check_auth()
        props.load_user()
        
   });
    return (
        <div data-theme='garden'>
            <ToastContainer autoclose={5000}/>
            <div className='flex'> 

                <div className='bg-base-300'> 
                    <SideBar/>
                </div>
                
                <div className='w-full'> 

                    <NavbarP/>
                    <div className='divider divider-neutral'></div>
                    <div name="cuerpo">
                        
                        <div>
                            {props.children}
                        </div>
                    </div>
                    <Footer/>

                </div>

            </div>
            
        </div>
    );
};

export default connect(null, {
    check_auth, 
    load_user, 
    refresh
}) (Layout)
