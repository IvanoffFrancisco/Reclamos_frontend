import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import Areas from './components/Areas'
import Tabla from './components/TablaDeDetalles'
import Detalles from './components/DetallesReclamo'
import EditarReclamo from './components/EditarReclamo'
import NuevoReclamo from './components/NuevoReclamo'

export default function Rutas() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/Areas' element={<Areas/>}/>
            <Route path='/Tabla/:division' element={<Tabla/>}/>
            <Route path='/Detalles/:id' element={<Detalles/>}/>
            <Route path='/Editar/:id' element={<EditarReclamo/>}/>
            <Route path='/NuevoReclamo' element={<NuevoReclamo/>}/>
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
  )
}
