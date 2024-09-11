import React from 'react'
import { HeroContainer, Titulo, Logo } from './styles'

import logo from '../../assets/logo.png'

const Hero = () => (
    <HeroContainer>
        <Logo src={logo} alt="Logo do efood" />
        <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </HeroContainer>
)

export default Hero