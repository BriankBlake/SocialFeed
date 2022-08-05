import React from "react";
import {Navbar} from "react-bootstrap";
import './NarBar.css';

const NavBar = (props) => {
    return(
        <Navbar id='navbar'>
            <h3 style={{margin: '1em'}}>Social
            <small className="textmuted">Feed</small></h3>
          </Navbar>
    );
};

export default NavBar;