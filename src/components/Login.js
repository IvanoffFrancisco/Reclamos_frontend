import React, { useEffect, useState } from 'react'
import Estatua from '../images/estatua2.jpg'
import Logo from '../images/imagenfooter.png'
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({});


  const [datos] = useState(JSON.parse(localStorage.getItem("usuario")));

  //verificar si el usaurio esta logeado
    const verificarLogeado=()=>{
        if(datos!==null){
            if(datos.length===1){
                if(datos[0].tipoDeUsuario==="administrador" || datos[0].tipoDeUsuario==="auxiliar"){
                    navigate('/Areas', { replace: true });
                }else{
                    navigate(`/Tabla/${datos[0].tipoDeUsuario}`, { replace: true });
                }
            }
        }else{
            navigate("/",{ replace: true });
        }
    }
    
    useEffect(() => {
        verificarLogeado();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    

    //metodo para obtener los datos usuario y contraseña
    const hendlerChangeLogin=(e)=>{
        e.preventDefault();
        const {name,value}=e.target;
        setData({...data,[name]:value});
    }
    //metodo para ingresar
    const login=async(e)=>{
        e.preventDefault();
        let config={
            method:"POST",
            headers:{
                "content-type":"application/json"
        },
            body:JSON.stringify(data)
        }

        const res=await fetch("https://reclamosbackend-production.up.railway.app/api/login",config);
        const respuesta=await res.json();
        if(respuesta.length===1){
            if(respuesta[0].tipoDeUsuario==="administrador" || respuesta[0].tipoDeUsuario==="auxiliar"){
                localStorage.setItem('usuario',JSON.stringify(respuesta));
                localStorage.setItem("tipoDeUsuario",respuesta[0].tipoDeUsuario);
                localStorage.setItem("idUsuario",respuesta[0].idUsuario);
                navigate('/Areas', { replace: true });
            }else{
                localStorage.setItem("tipoDeUsuario",respuesta[0].tipoDeUsuario);
                localStorage.setItem('usuario',JSON.stringify(respuesta));
                localStorage.setItem("idUsuario",respuesta[0].idUsuario);
                navigate(`/Tabla/${respuesta[0].tipoDeUsuario}`, { replace: true });
            }
        }else{
            alert("Usuario y/o contraseña incorrectas");   
        }
    }
    return (
        <section className="vh-90">
            <div className="container">
                <div className="row">
                <div className="col-sm-6 text-black">

                    <div>
                    <img src={Logo} alt="no hay imagen" style={{"display":"block","margin":"0px auto"}}/>
                    </div>

                    <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 pt-5 pt-xl-0 mt-xl-n5">

                    <form style={{"width":"23rem"}}>

                        <h3 className="fw-normal mb-3 pb-3" style={{"letterSpacing":"1px"}}>Log in</h3>

                        <div className="form-outline mb-4">
                        <input type="email" id="form2Example18" name="usuario" onChange={hendlerChangeLogin} className="form-control form-control-lg" />
                        <label className="form-label" for="form2Example18">Usuario</label>
                        </div>

                        <div className="form-outline mb-4">
                        <input type="password" id="form2Example28" name="password" onChange={hendlerChangeLogin} className="form-control form-control-lg" />
                        <label className="form-label" for="form2Example28">Contraseña</label>
                        </div>

                        <div className="pt-1 mb-4">
                        <button className="btn btn-info btn-lg btn-block" type="button" onClick={login}>Ingresar</button>
                        </div>
                    </form>
                    </div>

                </div>
                <div className="col-sm-6 px-0 d-none d-sm-block">
                    <img src={Estatua} alt="no hay imagen" className='w-100 vh-100'style={{"objectFit":"cover","border":"1px solid  #aed6f1 ", "borderRadius":"50px"}}/>
                </div>
                </div>
            </div>
        </section>
  )
}
