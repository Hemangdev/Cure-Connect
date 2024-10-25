
/* eslint-disable no-unused-vars */
import React from 'react'
import rightIcon from '../images/forward-icon.png'


const HomeCardData = [
    {
        id: 1,
        title: 'Instant Video Consultation',
        bgColor: '#ebde6c',
        innerLine: 'Is simply dummy text of the printing and typesetting industry. ',
    },
    {
        id: 2,
        title: 'Find Doctors Near You',
        bgColor: '#a7e0c0',
        innerLine: 'Is simply dummy text of the printing and typesetting industry.',
    },
    {
        id: 3,
        title: '24/7 Medicines available',
        bgColor: '#e4bad2',
        innerLine: 'Is simply dummy text of the printing and typesetting industry.',
    },
    {
        id: 4,
        title: 'Lab Test Facilities available',
        bgColor: '#94bcf0',
        innerLine: 'Is simply dummy text of the printing and typesetting industry.',
    },

]

const HomeCard = () => {
    return (
        <>
            {
                HomeCardData.map((item, index) => (
                    <div style={{backgroundColor:item.bgColor}} className= {`h-[180px] w-[200px] md:h-[360px] md:w-[360px] rounded-3xl p-4`} key={index}>
                        <h1 className='text-[#21265f] font-bold text-[19px] md:text-[35px]'>{item.title}</h1>
                        <p className='text-[#21265f] font-extralight text-[14px]'>{item.innerLine}</p> 

                        <div className='relative'>
                            <span className='h-[20px] w-[20px] md:h-[50px] md:w-[50px] rounded-full absolute bottom-[-25px] md:bottom-[-155px] bg-[#21265f] flex items-center justify-center'><img className='w-[55%]' src={rightIcon} /></span>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default HomeCard