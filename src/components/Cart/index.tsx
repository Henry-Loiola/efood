import React from 'react'
import { Overlay, CartContainer, AddCartButton, Sidebar, ItemCart, ImageItem, InfosItem, DeleteItemButton, InfosCart } from './styles'
import { RootReducer } from '../../store'
import { close, removeItem } from '../../store/reducers/cart'
import { priceFormat } from '../FoodList'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
    const { isOpen, pedido } = useSelector((state:RootReducer) => state.cart)
    const dispatch = useDispatch()
    const openCart = () => {
        dispatch(close())
    }

    const getTotalPrice = () => {
        return pedido.reduce((acumulator, actualValue) => {
            return (acumulator += actualValue.preco)
        }, 0)
    }

    const removItem = (id: number) => {
        dispatch(removeItem(id))
    }

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={openCart} />
            <Sidebar>
                <div>
                    <ul>
                        {pedido.map((p) => (
                            <ItemCart key={p.id} >
                                <ImageItem src={p.foto} alt="" />
                                    <InfosItem>
                                        <h3>{p.nome}</h3>
                                        <span>{priceFormat(p.preco)}</span>
                                    </InfosItem>
                                    <DeleteItemButton type="button" onClick={() => removItem(p.id)} />
                            </ItemCart>
                        ))}
                    </ul>
                    <InfosCart>
                        <p>Valor total</p>
                        <span>{priceFormat(getTotalPrice())}</span>
                    </InfosCart>
                    <AddCartButton>Continuar com a entrega</AddCartButton>
                </div>
            </Sidebar>
        </CartContainer>
    )
}

export default Cart