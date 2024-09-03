import Header from '../../components/Header'
import Apresentacao from '../../components/Apresentacao'
import FoodList from '../../components/FoodList'
import Footer from '../../components/Footer'
import FoodModel from '../../models/Food'
import pizza from '../../assets/pizza.png'
import capa from '../../assets/apresentacao.png'
import React from 'react'

const foods: FoodModel[] = [
    {
        id: 1,
        foodTitle: 'Pizza Marquerita',
        foodDescription:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        foodPhoto: pizza,
        foodPhotoAlt: 'Pizza marguerita',
        foodServe: 'de 2 a 3 pessoas',
        foodPrice: 60.9
    },
    {
        id: 2,
        foodTitle: 'Pizza Marguerita',
        foodDescription:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        foodPhoto: pizza,
        foodPhotoAlt: 'Pizza marguerita',
        foodServe: '',
        foodPrice: 0
    },
    {
        id: 3,
        foodTitle: 'Pizza Marguerita',
        foodDescription:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        foodPhoto: pizza,
        foodPhotoAlt: 'Pizza marguerita',
        foodServe: '',
        foodPrice: 0
    },
    {
        id: 4,
        foodTitle: 'Pizza Marguerita',
        foodDescription:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        foodPhoto: pizza,
        foodPhotoAlt: 'Pizza marguerita',
        foodServe: '',
        foodPrice: 0
    },
    {
        id: 5,
        foodTitle: 'Pizza Marguerita',
        foodDescription:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        foodPhoto: pizza,
        foodPhotoAlt: 'Pizza marguerita',
        foodServe: '',
        foodPrice: 0
    },
    {
        id: 6,
        foodTitle: 'Pizza Marguerita',
        foodDescription:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        foodPhoto: pizza,
        foodPhotoAlt: 'Pizza marguerita',
        foodServe: '',
        foodPrice: 0
    }
]

const restaurantData = {
    type: 'Italiana',
    name: 'La Dolce Vita Trattoria'
}

const Perfil = () => {
    return (
        <>
            <Header itens={0} />
            <Apresentacao
                type={restaurantData.type}
                name={restaurantData.name}
                image={capa}
            />
            <FoodList foods={foods} />
            <Footer />
        </>
    )
}

export default Perfil