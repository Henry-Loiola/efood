import Product from '../Restaurant'
import { Container, List } from './styles'
import { Restaurant } from '../../pages/Home'
import React, { useState } from 'react'

export type Props = {
    restaurants: Restaurant[]
}

const ProductList = ({ restaurants }: Props) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [destaque, setDestaque] = useState('Destaque da semana')
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