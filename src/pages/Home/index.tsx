import React from 'react'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'
import { useGetRestaurantsQuery } from '../../services/api'

export type Pedido = {
    id: number
    nome: string
    foto: string
    preco: number
}

export type Restaurant = {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: [
    {
        foto: string
        preco: number
        id: number
        nome: string
        descricao: string
        porcao: string
    }
]
}

const Home = () => {
    const { data: restaurants } = useGetRestaurantsQuery()

    if (restaurants) {
        return (
            <>
                <Hero />
                <RestaurantList restaurants={restaurants} />
                <Footer />
            </>
        )
    }
    return <h4>Carregando...</h4>
}
export default Home