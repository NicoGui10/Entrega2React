import React from 'react'
import Portada from "../../img/beta.png"
import { Link } from "react-router-dom"


export const Inicio = () => {
  return (
    <div className='Inicio'>

      <Link to="/">
        <h1 className='tittle'>Inicio</h1>
      </Link>

      <Link to="/Productos">
        <h1 className='tittle'>Productos</h1>
      </Link>

      <img src={Portada} alt="Inicio" />

   
    </div>
  )
}
