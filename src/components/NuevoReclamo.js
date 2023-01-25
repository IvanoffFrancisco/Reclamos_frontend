import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function NuevoReclamo() {
  const navigate = useNavigate();
  const id=Number(localStorage.getItem('idUsuario'));
  const [data, setData] = useState({"idUsuario":id,"estado":"pendiente"});

  const hendlerChangeDatosReclamo=(e)=>{
    const {name,value}=e.target;
    setData({...data,[name]:value});
  }

  const hendlerCargarReclamo=async (e)=>{
    e.preventDefault();
    let config={
      method:"POST",
      headers:{
          "content-type":"application/json"
  },
      body:JSON.stringify(data)
  }
    const res=await fetch('https://reclamosbackend-production.up.railway.app/api/reclamo',config);
    const respuesta=await res.json();
    console.log(respuesta);
    navigate("/Areas", { replace: true });
  }

  return (
    <div className='container'>
      <div>
        <h1 className='text-center' >Agregar un Nuevo Reclamo</h1>
      </div>

        <form className='mt-4'>
        <div className="form-group">
            <label htmlFor="titulo" className="control-label">Titulo</label>
            <input type="text" onChange={hendlerChangeDatosReclamo} className="form-control" id="titulo" name="titulo" placeholder="ej: Podar un arbol"/>
        </div>    

        <div className="form-group mt-3"> 
            <label htmlFor="domicilio" className="control-label">Domicilio</label>
            <input type="text" onChange={hendlerChangeDatosReclamo} className="form-control" id="domicilio" name="domicilio" placeholder="ej: Diagonal eva Peron 245"/>
        </div>                    
                                
        <div className="form-group mt-3">
            <label htmlFor="nombre" className="control-label">Nombre</label>
            <input type="text" onChange={hendlerChangeDatosReclamo} className="form-control" id="nombre" name="nombre" placeholder="ej: Jose"/>
        </div>    

        <div className="form-group mt-3"> 
            <label htmlFor="apellido" className="control-label">Apellido</label>
            <input type="text" onChange={hendlerChangeDatosReclamo} className="form-control" id="apellido" name="apellido" placeholder="ej: Gonzalez"/>
        </div>

        <div className="form-group mt-3"> 
            <label htmlFor="telefono" className="control-label">Telefono</label>
            <input type="number" onChange={hendlerChangeDatosReclamo} className="form-control" id="telefono" name="telefono" placeholder="ej: 3624257896"/>
        </div>
        <div className="form-group mt-3"> 
            <label htmlFor="fecha" className="control-label">Fecha del reclamo</label>
            <input type="date" onChange={hendlerChangeDatosReclamo} className="form-control" id="fecha" name="fecha" placeholder="fecha"/>
        </div>
        <div className="form-group mt-3"> 
            <label htmlFor="mensaje" className="control-label">Mensaje</label>
            <input type="text" onChange={hendlerChangeDatosReclamo} className="form-control" id="mensaje" name="mensaje" placeholder="ej: Quisieran que podaran un arbol que se esta por caer"/>
        </div>
        <div className="form-group mt-3"> 
            <label htmlFor="actuacion_simple" className="control-label">Actuación simple</label>
            <input type="text" onChange={hendlerChangeDatosReclamo} className="form-control" id="actuacion_simple" name="actuacion_simple" placeholder="ej: 25874/2023"/>
        </div>

        <div className="form-group mt-3">
            <label htmlFor="division" className="control-label">Area</label>
            <select className="form-control" onChange={hendlerChangeDatosReclamo} id="division" name='division' placeholder='Seleccionar una opción'>
                <option value="">Seleccionar un Area</option>
                <option value="Perfilado de calles">Perfilado de calles</option>
                <option value="Zanjeo">Zanjeo</option>
                <option value="Desmalezamiento">Desmalezamiento</option>
                <option value="Alumbrado">Alumbrado</option>
                <option value="Poda de arboles">Poda de arboles</option>
                <option value="Barrido">Barrido</option>
                <option value="Recolección de Ramas">Recolección de Ramas</option>
                <option value="Equipo de emergencias">Equipo de emergencias</option>
                <option value="Mini basurales">Mini basurales</option>
            </select>                    
        </div>        
        
        <div className="form-group mt-3">
            <button type="submit" onClick={hendlerCargarReclamo} className="btn btn-success mb-5">Agregar el reclamo</button>
        </div>     
    </form>
    </div>
    
  )
}
