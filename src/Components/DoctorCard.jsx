/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import dummyImg from '../images/dummy.jpg'


const DoctorCardData = [
    {
        id: 1,
        image: 'https://placehold.co/200x250',
        name: 'Dr. Sujata Nagar',
        designation: 'Hair Specialist'
    },
    {
        id: 2,
        image: 'https://placehold.co/200x250',
        name: 'Dr. Pramod Jindal',
        designation: 'Urologist'
    },
    {
        id: 3,
        image: 'https://placehold.co/200x250',
        name: 'Dr. Prashant Aggarwal',
        designation: 'Cardiologist'
    },
    {
        id: 4,
        image: 'https://placehold.co/200x250',
        name: 'Dr. Ravindra Kumar',
        designation: 'Neurologist'
    },
    {
        id: 5,
        image: 'https://placehold.co/200x250',
        name: 'Dr Deepak Dahiya',
        designation: 'Cardiologist'
    },

]

const DoctorCard = () => {
    return (
        <>


            {DoctorCardData.map((item) => (
                <div key={item.id} className="max-w-[22rem] sm:max-w-[20rem] md:max-w-[18rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src={dummyImg} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">({item.designation})</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#66d998] rounded-lg">
                            Book Appointment
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            ))}





        </>
    )
}

export default DoctorCard