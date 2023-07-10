import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: '#24FF00', minWidth: '100vw' }}>
    <Toolbar>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/treinos/create">Criar Treino</Button>
      <Button color="inherit" component={Link} to="/chat">Chat</Button>
    </Toolbar>
  </AppBar>
  );
};

export default Navbar;
