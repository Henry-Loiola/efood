import React from 'react'
import { Container, Titulo, Logo } from './styles'

import logo from '../../assets/logo.png'

const Hero = () => (
    <Container>
        <Logo src={logo} alt="Logo do efood" />
        <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </Container>
)

export default Hero