
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const categoryData = [
    {
        id: 1,
        category: 'Orthopedic'
    },
    {
        id: 2,
        category: 'Shoulder Pain'
    },
    {
        id: 3,
        category: 'Neck Pain'
    },
    {
        id: 4,
        category: 'Obesity'
    },
    {
        id: 5,
        category: 'Headache'
    },
    {
        id: 6,
        category: 'Eye Care'
    },
    {
        id: 7,
        category: 'Nuerology'
    },
    {
        id: 8,
        category: 'Gastro'
    },
    {
        id: 9,
        category: 'Cardiologist'
    },
    {
        id: 10,
        category: 'Gynachologist'
    },
    

]

const Categories = () => {

    const [isActive, setIsActive] = useState(false)

    const toggleBackground = (id) => {
        setIsActive((prev) => (prev === id ? null : id));
    }
    return (
        <>

            {
                categoryData.map((item) => (
                    <button onClick={() => toggleBackground(item.id)} key={item.id} className={`px-4 py-2 rounded-3xl ${isActive === item.id ? 'bg-[#21265f] text-white' : 'bg-[#f0f3f8] text-[#21265f]'}`}>
                        <p className='font-medium' >{item.category}</p>
                    </button>
                ))
            }




        </>
    )
}

export default Categories