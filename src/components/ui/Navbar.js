import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types"

export const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {

        dispatch({type: types.logout});
        
        navigate('/login', {
            replace: true,
        });

    }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link 
            className="navbar-brand mx-2"
            to="/"
        >
            Animes
        </Link>

        <div className="navbar-collapse">
            <div className="navbar-nav">

                <NavLink
                    className={ ({isActive}) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                    to="/shounen"
                >
                    Shounen
                </NavLink>

                <NavLink
                    className={ ({isActive}) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                    to="/shojo"
                >
                    Shojo
                </NavLink>

                <NavLink
                    className={ ({isActive}) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                    to="/seinen"
                >
                    Seinen
                </NavLink>

                <NavLink
                    className={ ({isActive}) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                    to="/search"
                >
                    Search
                </NavLink>

            </div>
        </div>
        <div className="navbar-collapse collapse w-100 dual-collapse2 d-flex justify-content-end">
            
            <ul className="navbar-nav ml-auto">    
                <span className="nav-item nav-link text-info">
                    { user.name }
                </span>
            </ul>
            
            <button
                className="nav-item nav-link btn"
                onClick={ handleLogout }
            >
                Logout
            </button>

        </div>
    </nav>
  );
};
