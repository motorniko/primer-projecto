import React from 'react';
import '../hojas-de-estilo/testimonio.css';


function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-t'src={require(`../imagenes/${props.imagen}.png`)} />
      <div className='contenedor-tex'>
        <p className='nombre-tes'>{props.nombre} en {props.pais}</p>
        <p className='cargo-tes'>{props.cargo} en {props.empresa}</p>
        <p className='texto-tes'> {props.testimonio} </p>
      </div>
    </div>
  );
}

export default Testimonio;