import React from 'react'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Loader from '../../components/Loader'
import RestaurantList from '../../components/RestaurantList'
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
    const { data: restaurants } = useGetRestaurantsQuery()

    if (restaurants) {
        return (
            <>
                <Hero />
                <RestaurantList restaurants={restaurants} isLoading={false} />
                <Footer />
            </>
        )
    }
    return <Loader />
}
export default Home