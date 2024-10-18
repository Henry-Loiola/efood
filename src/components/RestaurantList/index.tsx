import Product from '../Restaurant'
import { Container, List } from './styles'
import React, { useState } from 'react'
import Loader from '../Loader'

export type Props = {
    restaurants: Restaurant[]
    isLoading: boolean
}

const ProductList = ({ restaurants, isLoading }: Props) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [destaque] = useState('Destaque da semana')

    if (isLoading) {
        return <Loader />
    }

    return (
        <Container>
            <List>
                {restaurants.map((restaurants) => (
                <Product
                    key={restaurants.id}
                    RestaurantTitle={restaurants.titulo}
                    RestaurantRate={restaurants.avaliacao}
                    RestaurantDetails={restaurants.descricao}
                    RestaurantImage={restaurants.capa}
                    RestaurantCategories={[
                        restaurants.tipo,
                        restaurants.destacado ? destaque : ''
                ]}
                RestaurantToLink={`/food/${restaurants.id}`}
            />
            ))}
        </List>
        </Container>
    )
}

export default ProductList