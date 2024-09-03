import { useState } from 'react'
import Food from '../Food'
import { AddCartButton } from '../Food/styles'
import { Container, List, Modal, ModalContent, FoodImage, ModalContainer, FoodTitle, FoodDescription, CloseIcon } from './styles'
import FoodModel from '../../models/Food'
import close from '../../assets/closeimg.png'
import React from 'react'

export type Props = {
    foods: FoodModel[]
}

const FoodList = ({ foods }: Props) => {
    const [showModal, setShowModal] = useState(false)
    const [foodTitle, setFoodTitle] = useState('')
    const [foodDescription, setFoodDescription] = useState('')
    const [foodImage, setFoodImage] = useState('')
    const [foodImageAlt, setFoodImageAlt] = useState('')
    const [foodServe, setFoodServe] = useState('')
    const [foodPrice, setFoodPrice] = useState(0)

    return (
        <>
            <Container>
                <List>
                    { foods.map((food) => (
                        <li
                            key={food.id}
                            onClick={() => {
                                setShowModal(true)
                                setFoodTitle(food.foodTitle)
                                setFoodDescription(food.foodDescription)
                                setFoodServe(food.foodServe)
                                setFoodPrice(food.foodPrice)
                                setFoodImageAlt(food.foodPhotoAlt)
                                setFoodImage(food.foodPhoto)
                            }}
                        >
                            <Food 
                                key={food.id}
                                FoodImage={food.foodPhoto}
                                FoodTitle={food.foodTitle}
                                FoodDescription={food.foodDescription}
                                FoodImageAlt={food.foodPhotoAlt}
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
                            Adicionar ao carrinho - R$ {foodPrice}
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
