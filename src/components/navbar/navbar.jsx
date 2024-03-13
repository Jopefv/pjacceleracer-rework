import React from 'react'
import Logo from '../../assets/Logos/hotwheelslogo.mp4'
import { Link } from 'react-router-dom'
import "./navbar.css"

export const Navbar = () => {
  return (
    
    <div className='navbar'> 
      <video className="logo" autoPlay loop playsInline muted>
        <source src={Logo} type="video/mp4" />
      </video>

        <ul className='nav'>
          <Link className='navi' to="/" >Home</Link>
          <Link className='navi' to="/personagens" >Personagens</Link>
          <Link className='navi' to="/veiculos" >Veiculos</Link>
          <Link className='navi' to="/reinos" >Reinos</Link>
          <Link className='navi' to="/mods" >Mods</Link>
          <Link className='navi' to="/accelechargers" >Accelechargers</Link>
          <Link className='navi' to="/monstros" >Monstros</Link>
        </ul>
    
    </div>
  )
}
