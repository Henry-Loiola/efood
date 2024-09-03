import React from 'react'
import { Card, Image, Title, Description, AddCartButton } from './styles'

export type Props = {
    FoodImage: string
    FoodTitle: string
    FoodDescription: string
    FoodImageAlt: string
}

const Food = ({
    FoodImage,
    FoodTitle,
    FoodDescription,
    FoodImageAlt
}: Props) => (
    <Card>
        <Image src={FoodImage} alt={FoodImageAlt}/>
        <Title>{FoodTitle}</Title>
        <Description>{FoodDescription}</Description>
        <AddCartButton to={''}>Adicionar ao carrinho</AddCartButton>
    </Card>
)

export default Food