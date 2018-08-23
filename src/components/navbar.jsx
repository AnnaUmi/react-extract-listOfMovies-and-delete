import React, {Component} from 'react';

const NavBar = ({totlalCounters}) => {
        return(
            <nav className="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar{" "}
                <span className="badge badge-pill badge-secondary">{totlalCounters}</span> </a>
            </nav>
        )
}
export default NavBar;