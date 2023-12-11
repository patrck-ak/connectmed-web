import React from 'react'
import Style from './Navbar.module.css'
import { FaHome, FaRegListAlt, FaUserPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <>
    <ul className={Style.navlist}>
      <li className={Style.navitem}> <Link to={'/'}> <FaHome/> Inicio</Link> </li>
      <li className={Style.navitem}> <Link to={'/new'}> <FaUserPlus/> Novo Paciente</Link> </li>
      <li className={Style.navitem}> <Link to={'/list'}> <FaRegListAlt/> Listar Pacientes</Link> </li>
    </ul>
    </>
  )
}

export default Navbar