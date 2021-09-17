import React from "react";
import {Fab, AppBar, Toolbar, IconButton, Typography, Button} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core/styles";
import {Link} from 'react-router-dom';

function Header(){
  // const classes = useStyles();

    return (
      <div className="bar">
        <nav class="navbar navbar-expand-lg top-bar">
          <a class="navbar-brand" href="#">Fausto Coffee</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <Fab>
              <MenuIcon />
            </Fab>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav ml-auto link-list">
              <li>
                <Link to="/" className="nav-item nav-link">Home</Link>
              </li>
              <li>
                <a class="nav-item nav-link">Menu</a>
              </li>
              <li>
                <a class="nav-item nav-link">Contact</a>
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