import React from 'react'
import Logo from '../images/Logo.png';
import {useNavigate} from 'react-router-dom';

export default function HeaderComun() {
  
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
                    <div className='col-lg-10'>
                        <img src={Logo} alt="" className='ps-3' width="350" height="100"/>
                    </div>
                    <div className='col-lg-2' style={{"fontFamily":"sans-serif", "fontSize":"18px"}}>
                        <ul className="nav align-items-center">
                            <li>
                                <button onClick={cerrarSesion} className='btn btn-secondary'>Cerrar Sesión</button>
                            </li>
                        </ul>
                    </div>

                </div>
        </header>
  )
}
