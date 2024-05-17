import { connect } from "react-redux";
import { logout } from '../../redux/actions/auth';
import {  Fragment, useState } from 'react';
import { Link } from "react-router-dom";

function NavbarP ({isAuthenticated, user, logout}) {
    const [redirect, setRedirect] = useState(false);

    const logoutHandler = () => {
      logout();
      setRedirect(true);
    };

    const authLinks = (
        <div>
          {user ? (
            <div>
                  
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={`http://127.0.0.1:8000/${user.foto}`} />
              </div>
            </div>
  
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  <Link to={'/yo'}>
                    Mi Perfil
                    <span className="badge">New</span>
                  </Link>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a onClick={logoutHandler}>Logout</a></li>
            </ul>
          </div>
          <div className="badge">default</div>
          <div className="badge badge-neutral">neutral</div>

          <Link to={'/subir_archivo'}>
            <div className="badge badge-primary">subir</div>
          </Link>
          
          <div className="badge badge-secondary">secondary</div>
          <div className="badge badge-accent">accent</div>
          <div className="badge badge-ghost">ghost</div>
            </div>
          ):(
            <div>
            </div>
          )}
        </div>
  
        );

        const resList = (
            <Fragment>
              <div className="flex"> 
                <div className="">
                  <Link to={'/signup'}>
                    <a className="btn">Signup</a>
                  </Link>
                </div>
                <div className="">
                  <Link to={'/login'}>
                    <a className="btn">Login</a>
                  </Link>
                </div>
              </div>
            </Fragment>
          );

        return (
            <div className="flex justify-end">
              {isAuthenticated ? (
                <div className="">
                  {authLinks}
                </div>
              ) : (
                <div className="">
                  {resList}
                </div>
              )}
            </div>
          );
};

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user
});

export default connect(mapStateToProps, {
    logout
})(NavbarP)