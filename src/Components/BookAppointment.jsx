/* eslint-disable no-unused-vars */
import React from 'react'
import Categories from './Categories'
import DoctorCard from './DoctorCard'

const BookAppointment = () => {
    return (
        <>
            <div className='max-w-[1540px] mx-auto p-4 my-5'>
                <div>
                    <h1 className='text-[#21265f] font-bold text-[21px] md:text-[50px]'>Book an Appointment for an</h1>
                    <h1 className='text-[#21265f] font-bold text-[21px] md:text-[50px]'>in-clininc consultation</h1>
                </div>
                <div className='mt-3 flex gap-3 justify-items-start items-start overflow-x-scroll'>
                    <Categories />
                </div>
                {/* Doctor Card Come Here */}
                <div className='flex gap-3 flex-wrap mt-4'>
                    <DoctorCard/>
                </div>
                <div>

                </div>
            </div>


        </>
    )
}

export default BookAppointment