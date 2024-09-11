/* eslint-disable array-callback-return */
import Button from '../Button'
import { Card, Image, Title, Description, Rate, Categories } from './styles'
import Star from '../../assets/star.png'
import React from 'react'
import { reduceDescription } from '../Food'

type Props = {
    RestaurantTitle: string
    RestaurantRate: number
    RestaurantDetails: string
    RestaurantImage: string
    RestaurantCategories: string[]
    RestaurantToLink: string
}

const Restaurant = ({
    RestaurantTitle,
    RestaurantRate,
    RestaurantDetails,
    RestaurantImage,
    RestaurantCategories,
    RestaurantToLink
}: Props) => {
    return (
        <Card>
            <Image src={RestaurantImage} alt="" />
            <Categories>
                {RestaurantCategories.map((info) => {
                    if (info) {
                        return <Button key={info}>{info}</Button>
            }
            })}
            </Categories>
            <div className="ContainerTop">
                <Title>{RestaurantTitle}</Title>
                <Rate>
                    <h3>{RestaurantRate}</h3>
                    <img src={Star} alt="Estrela amarela" />
                </Rate>
                </div>
                <Description>{reduceDescription(RestaurantDetails)}</Description>
                <Button type="link" to={RestaurantToLink}>
                    Saiba mais
                </Button>
        </Card>
    )
}

export default Restaurant