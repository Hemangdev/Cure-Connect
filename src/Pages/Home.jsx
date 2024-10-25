/* eslint-disable no-unused-vars */
import React from 'react'
import CarouselHome from '../Components/CarouselHome'
import HomeCard from '../Components/HomeCard'
import BookAppointment from '../Components/BookAppointment'

const Home = () => {
    return (
        <>
        <div className='max-w-[1540px] mx-auto'>
            <div className=''>
                <CarouselHome />
            </div>

            <div className='mt-3 flex flex-wrap gap-4 md:gap-6 justify-center'>
                <HomeCard />
            </div>


            <div className='mt-3'>
                <BookAppointment />
            </div>
        </div>
        </>
    )
}

export default Home