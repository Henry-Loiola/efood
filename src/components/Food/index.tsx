import React from 'react'
import { Card, Image, Title, Description, AddCartButton } from './styles'

export type Props = {
    FoodImage: string
    FoodTitle: string
    FoodDescription: string
    FoodImageAlt: string
}

export const reduceDescription = (description: string) => {
    if (description.length > 128) {
        return description.slice(0, 121) + '...'
    }
    return description
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
        <Description>{reduceDescription(FoodDescription)}</Description>
        <AddCartButton to={''}>Adicionar ao carrinho</AddCartButton>
    </Card>
)

export default Food