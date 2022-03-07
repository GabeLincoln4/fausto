import React from "react";
import {Fab, AppBar, Toolbar, IconButton, Typography, Button} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core/styles";
import {Link} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';

function Header(){
  // const classes = useStyles();

    return (
      <div className="bar">
        <nav class="bg-yellow-800 navbar fixed w-full h-auto navbar-expand-lg top-bar z-20">
          <a class="navbar-brand text-white" href="/">Fausto Coffee</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <Fab>
              <MenuIcon />
            </Fab>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav ml-auto link-list">
              <li>
                <ScrollLink to="home" href="/" className="nav-item nav-link" smooth={true} duration={2000}>Home</ScrollLink>
              </li>
              <li>
                <ScrollLink to="services" href="" className="nav-item nav-link" smooth={true} duration={2000}>Services</ScrollLink>
              </li>
              <li>
                <ScrollLink className="nav-item nav-link" href="" to="roaster" smooth={true} duration={2000} >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
}

export default Header;


// <AppBar classes = {{
      //   root: classes.root
      // }}>
      //   <Toolbar>
          
      //   </Toolbar>
      // </AppBar>