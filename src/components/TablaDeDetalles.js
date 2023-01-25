import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom';
import HeaderAdmin from './HeaderAdmin';
import HeaderComun from './HeaderComun';


export default function TablaDeDetalles() {
    const { division } = useParams();

    const [data, setData] = useState([]);
    const [tabla, setTabla] = useState([]);

    //obtener todos los datos del area
    const obtenerDatosDivision=async (e)=>{
        const res=await fetch(`https://reclamosbackend-production.up.railway.app/api/reclamo/${division}`);
        const respuesta=await res.json();
        setData(respuesta);
        setTabla(respuesta);
    }
    //hacer la peticion de todos los datos
    useEffect(() => {
      obtenerDatosDivision();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //filtro para mostrar solo los reclamos pendientes
    const mostrarPendientes=(e)=>{
        e.preventDefault();
        const newTabla= data.filter(datos=>datos.estado==="pendiente");
        setTabla(newTabla);
       
    }

    //filtro para mostrar solo los reclamos en proceso
    const mostrarEnProceso=(e)=>{
        e.preventDefault();
        const newTabla= data.filter(datos=>datos.estado==="en proceso");
        setTabla(newTabla);
    }

    //funcion para mostrar todos los datos de nuevo
    const mostrarTodosLosDatos=(e)=>{
        e.preventDefault();
       setTabla(data);
    }
    
  return (
    <div className='container'>
        {
            localStorage.getItem("tipoDeUsuario")!=="administrador" ? (
                <HeaderComun/>
                ):(
                <HeaderAdmin/>
            )
        }
        <div className='text-center'>
            <h1>Reclamos area {division}</h1>
        </div>
        <div className='mt-3 p-3 border border-secondary-subtle rounded-4'>
            <div>
                <h3>Filtros</h3>
            </div>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" onClick={mostrarPendientes} className="btn btn-primary">Pendiente</button>
                <button type="button" onClick={mostrarEnProceso} className="btn btn-warning">En Proceso</button>
                <button type="button" className="btn btn-success">Realizado</button>
                <button type="button" className="btn btn-danger">Vencido</button>
                <button type="button" onClick={mostrarTodosLosDatos} className="btn btn-secondary">Mostrar Todo</button>
            </div>
        </div>
        <div className='table-responsive'>
        <table className="table mt-3">
            <thead>
                <tr>
                <th scope="col">Titulo</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Domicilio</th>
                <th scope="col">Telefono</th>
                <th scope="col">Fecha</th>
                <th scope="col">Estado</th>
                <th scope="col">Ver Más</th>
                <th scope="col">Editar</th>
                </tr>
            </thead>
            <tbody>
                {
                    tabla.map(datos=>{
                         let id=datos.idReclamo;
                         let ver=`/Detalles/${id}`;
                         let editar=`/editar/${id}`;

                         let cambiarFecha=String(datos.fecha);
                         let nuevoFormatoDeFecha=cambiarFecha.substring(0,10);
                         let estilo="";
                        if(datos.estado==="pendiente"){
                            estilo="bg-primary text-white";
                        }
                        if(datos.estado==="en proceso"){
                            estilo="bg-warning text-white";
                        }
                        if(datos.estado==="realizado"){
                            estilo="bg-success text-white";
                        }
                        if(datos.estado==="vencido"){
                            estilo="bg-warning text-white";
                        }
                        return(
                        <tr>
                            <td>{datos.titulo}</td>
                            <td>{datos.nombre}</td>
                            <td>{datos.apellido}</td>
                            <td>{datos.domicilio}</td>
                            <td>{datos.telefono}</td>
                            <td>{nuevoFormatoDeFecha}</td>
                            <td className={estilo} >{datos.estado}</td>
                            <td><button className='btn btn-success'><Link className='text-white' to={ver}>Ver Más</Link></button></td>
                            <td><button className='btn btn-primary'><Link className='text-white' to={editar}>Editar</Link></button></td>
                        </tr>
                        )
                    })  
                }
                
            </tbody>
        </table>
        </div>
    </div>
  )
}
