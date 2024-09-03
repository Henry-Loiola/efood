import React from 'react'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'

import { useEffect, useState } from 'react'

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
        preco: string
        id: number
        nome: string
        descricao: string
        porcao: string
    }
]
}

const Home = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        .then((res) => res.json())
        .then((res) => setRestaurants(res))
    }, [])
    return (
        <>
        <Hero />
        <RestaurantList restaurants={restaurants} />
        <Footer />
        </>
    )
}
export default Home