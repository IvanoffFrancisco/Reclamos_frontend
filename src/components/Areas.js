import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import HeaderAdmin from './HeaderAdmin';
import {useNavigate} from 'react-router-dom';

export default function Areas() {
    
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("tipoDeUsuario")!=="administrador"){
            navigate(`/Tabla/${localStorage.getItem("tipoDeUsuario")}`, { replace: true });
        }else{
            navigate("/Areas", { replace: true });
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

  return (
    <div className='container'>
        <HeaderAdmin/>
        <div>
            <h1 className='text-center'>Areas</h1>
        </div>
        <div className='row d-flex justify-content-around'>
            <Link className='col-lg-5 bg-secondary text-white m-3 border rounded-3' to="/Tabla/Perfilado de calles">
                <h1 className='text-center m-5'>Perfilado de calles</h1>
            </Link>

            <Link className='col-lg-5  bg-dark text-white m-3 border rounded-3' to="/Tabla/Zanjeo">
                <h1 className='text-center m-5'>Zanjeo</h1>
            </Link>

            <Link className='col-lg-5  bg-success text-white m-3 border rounded-3' to="/Tabla/Desmalezamiento">
                <h1 className='text-center m-5'>Desmalezamiento</h1>
            </Link>

            <Link className='col-lg-5  bg-warning text-white m-3 border rounded-3' to="/Tabla/Alumbrado">
                <h1 className='text-center m-5'>Alumbrado</h1>
            </Link>

            <Link className='col-lg-5  bg-success-subtle text-white m-3 border rounded-3' to="/Tabla/Poda de arboles">
                <h1 className='text-center m-5'>Poda de Arboles</h1>
            </Link>

            <Link className='col-lg-5  bg-primary text-white m-3 border rounded-3' to="/Tabla/Barrido">
                <h1 className='text-center m-5'>Barrido</h1>
            </Link>

            <Link className='col-lg-5  bg-danger text-white m-3 border rounded-3' to="/Tabla/Recolección de Ramas">
                <h1 className='text-center m-5'>Recolección de Ramas</h1>
            </Link>

            <Link className='col-lg-5  bg-info text-white m-3 border rounded-3' to="/Tabla/Equipo de emergencias">
                <h1 className='text-center m-5'>Equipo de emergencia</h1>
            </Link>

            <Link className='col-lg-5  bg-dark text-white m-3 border rounded-3' to="/Tabla/Mini basurales">
                <h1 className='text-center m-5'>Mini Basurales</h1>
            </Link>
            
        </div>
    </div>
  )
}
