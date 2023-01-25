import React from 'react'
import Logo from '../images/Logo.png';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


export default function HeaderAdmin() {
    
    const navigate = useNavigate();
    

    //funcion para poder cerrar sesion, borra todo el localstorage
    const cerrarSesion=()=>{
        localStorage.removeItem("tipoDeUsuario");
        localStorage.removeItem("usuario");
        navigate("/",{ replace: true });
    }
  return (
    <header className='navbar navbar-light bg-light'>
            <div className='row d-flex justify-content-around w-100 align-items-center'>
                <div className='col-lg-8'>
                    <img src={Logo} alt="" className='ps-3' width="350" height="100"/>
                </div>
                <div className='col-lg-4' style={{"fontFamily":"sans-serif", "fontSize":"18px"}}>
                    <ul className="nav align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link active text-dark fw-bold" aria-current="page" to="/Areas">Areas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-dark  fw-bold" aria-current="page" to="/NuevoReclamo">Nuevo Reclamo</Link>
                        </li>
                        <li>
                            <button onClick={cerrarSesion} className='btn btn-secondary'>Cerrar Sesión</button>
                        </li>
                    </ul>
                </div>

            </div>
    </header>
  )
}
