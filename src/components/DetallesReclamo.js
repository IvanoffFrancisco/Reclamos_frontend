import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

export default function DetallesReclamo() {
  const { id } = useParams();
  const [data, setData] = useState({})

  const obtenerReclamo=async ()=>{
    const res=await fetch(`https://reclamosbackend-production.up.railway.app/api/reclamo/id/${id}`);
    const respuesta=await res.json();
    let cambiar=String(respuesta[0].fecha);
    let fecha=cambiar.substring(0,10);
    respuesta[0].fecha=fecha;    
    setData(respuesta[0]);
  }

  useEffect(() => {
    obtenerReclamo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  
  return (
    <div className='container'>
      <h1 className='text-center'>Reclamo</h1>
      <div className='row d-flex justify-content-around'>
        <div className='col-lg-5'>
          <h2>Detalles del reclamo</h2>
            <h4>Titulo: <p>{data.titulo}</p></h4>
            <h4>Mensaje: <p>{data.mensaje}</p></h4>
            <h4>Domicilio: <p>{data.domicilio}</p></h4>
            <h4>Area: <p>{data.division}</p></h4>
            <h4>Estado: <p>{data.estado}</p></h4>
        </div>
        <div className='col-lg-5'>
          <h2>Detalles de la persona que hizo el reclamo</h2>
            <h4>Nombre: {data.nombre}</h4>
            <h4>Apellido: {data.apellido}</h4>
            <h4>Telefono: {data.telefono}</h4>
            <h4>Fecha: {data.fecha}</h4>
        </div>
      </div>
    </div>
  )
}
