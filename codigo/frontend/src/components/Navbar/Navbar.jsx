import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.styles.css';

function Navbar(){
  return (
    <nav className="navbar">
      <div className="navbar-brand">Painel</div>
      <div className="navbar-links">
        <NavLink to="/aluno" className="nav-link" activeclassname="active">
          Alunos
        </NavLink>
        <NavLink to="/empresa" className="nav-link" activeclassname="active">
          Empresas
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
