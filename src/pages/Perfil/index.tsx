import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Apresentacao from '../../components/Apresentacao'
import FoodList from '../../components/FoodList'
import Footer from '../../components/Footer'
import React from 'react'

import { useGetRestaurantSelectedQuery } from '../../services/api'
import Cart from '../../components/Cart'

const Perfil = () => {
    const { id } = useParams()
    const { data: restaurantFood } = useGetRestaurantSelectedQuery(id!)

    if (restaurantFood) {
        return (
            <>
                <Header />
                <Apresentacao restaurant={restaurantFood} />
                <FoodList 
                    restaurant={restaurantFood}
                    pedido={{
                        id: 0,
                        nome: '',
                        foto: '',
                        preco: 0
                    }}
                />
                <Footer />
                <Cart />
            </>
        )
    }
    return <h3>Carregando...</h3>
}

export default Perfil