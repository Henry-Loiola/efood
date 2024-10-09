import React from 'react'
import logo from '../../assets/logo.png'
import { HeaderStyle, LinkRestaurantes, Logo, TextoCart } from './styles'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
    const dispatch = useDispatch()
    const { pedido } = useSelector((state: RootReducer) => state.cart)
    const openCart = () => {
        dispatch(open())
    }

    return (
        <HeaderStyle>
            <div className="container">
                <LinkRestaurantes href="/">Restaurantes</LinkRestaurantes>
                <Logo src={logo} alt="Logo do restaurante" />
                <TextoCart onClick={openCart}>
                    {pedido.length} produto(s) no carrinho
                </TextoCart>
            </div>
        </HeaderStyle>
    )
}

export default Header