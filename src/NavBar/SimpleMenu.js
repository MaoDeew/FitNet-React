import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'
import classes from './SimpleMenu.css'

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>

      <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
        <MenuIcon aria-controls="simple-menu" aria-haspopup="true" />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >

        <Link className={classes.link} to='/'><MenuItem onClick={handleClose}>Inicio</MenuItem></Link>
        <Link className={classes.link} to='/profile'><MenuItem onClick={handleClose}>Perfil</MenuItem></Link>
        <Link className={classes.link} to='/routines'><MenuItem onClick={handleClose}>Generador de Rutinas</MenuItem></Link>
        <Link className={classes.link} to='/nutritional'><MenuItem onClick={handleClose}>Información Nutricional</MenuItem></Link>


      </Menu>
    </div>
  );
}