import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Perfil from './pages/Perfil'
import React from 'react'

const Rotas = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/food/:id" element={<Perfil />} />
    </Routes>
)

export default Rotas