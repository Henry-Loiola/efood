import { useState } from 'react'
import Food from '../Food'
import { AddCartButton } from '../Food/styles'
import { Container, List, Modal, ModalContent, FoodImage, ModalContainer, FoodTitle, FoodDescription, CloseIcon } from './styles'
import close from '../../assets/closeimg.png'
import { Restaurant } from '../../pages/Home'
import React from 'react'

export type Props = {
    restaurant: Restaurant
}

const FoodList = ({ restaurant }: Props) => {
    const [showModal, setShowModal] = useState(false)
    const [foodTitle, setFoodTitle] = useState('')
    const [foodDescription, setFoodDescription] = useState('')
    const [foodImage, setFoodImage] = useState('')
    const [foodImageAlt, setFoodImageAlt] = useState('')
    const [foodServe, setFoodServe] = useState('')
    const [foodPrice, setFoodPrice] = useState(0)
    const priceFormat = (price: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price)
    }

    return (
        <>
            <Container>
                <List>
                    {restaurant.cardapio.map((food) => (
                        <li
                            key={food.id}
                            onClick={() => {
                                setShowModal(true)
                                setFoodTitle(food.nome)
                                setFoodDescription(food.descricao)
                                setFoodServe(food.porcao)
                                setFoodPrice(food.preco)
                                setFoodImageAlt(food.nome)
                                setFoodImage(food.foto)
                            }}
                        >
                            <Food 
                                key={food.id}
                                FoodImage={food.foto}
                                FoodTitle={food.nome}
                                FoodDescription={food.descricao}
                                FoodImageAlt={food.nome}
                            />
                        </li>
                    ))}
                </List>
            </Container>
            <Modal className={showModal ? 'visible' : ''}>
                <ModalContent>
                    <FoodImage src={foodImage} alt={foodImageAlt} />
                    <ModalContainer>
                        <FoodTitle>{foodTitle}</FoodTitle>
                        <FoodDescription>
                            {foodDescription}
                            <p>Serve: {foodServe}</p>
                        </FoodDescription>
                        <AddCartButton to={''}>
                            Adicionar ao carrinho - R$ {priceFormat(foodPrice)}
                        </AddCartButton>
                    </ModalContainer>
                    <CloseIcon 
                        onClick={() => setShowModal(false)}
                        src={close}
                        alt="Icone de fechar"
                    />
                </ModalContent>
                <div onClick={() => setShowModal(false)} className="overlay"></div>
            </Modal>
        </>
    )
}

export default FoodList
