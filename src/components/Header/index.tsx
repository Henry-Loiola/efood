import React from 'react'
import logo from '../../assets/logo.png'
import { HeaderStyle, LinkRestaurantes, Logo, TextoCart } from './styles'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Props = {
    itens: number
}

const Header = ({ itens = 0 }: Props) => (
    <HeaderStyle>
        <div className="container">
            <LinkRestaurantes href="/">Restaurantes</LinkRestaurantes>
            <Logo src={logo} alt="Logo do restaurante" />
            <TextoCart>{itens} produto(s) no carrinho</TextoCart>
        </div>
    </HeaderStyle>
)

export default Header