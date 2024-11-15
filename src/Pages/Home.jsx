/* eslint-disable no-unused-vars */
import React from 'react'

const Home = () => {
    return (
        <>
            <div className='max-w-[1540px] mx-auto'>
                <div className='w-full flex flex-col justify-center h-screen my-3 bg-[#e5e5e5] rounded-3xl'>

                    <div className='p-4 flex flex-col justify-center items-center'>
                        <div>
                            <img className=' rounded-[50px] w-[100px] h-[100px] object-cover grayscale shadow-lg' src="https://img.freepik.com/premium-photo/smiling-web-developer-headshot_810293-231536.jpg?w=100" alt="" />
                        </div>
                        <h1 className='text-[40px] font-bold'>Looking to lighten</h1>
                        <h1 className='text-[40px] font-bold'>your workload?</h1>
                        <p className=' font-light'> Let’s build something amazing! </p>
                    </div>

                    <div className='my-5 flex justify-center items-center'> 
                        <button className='px-4 py-2 bg-black text-white rounded-3xl shadow-xl'>Book a Meeting</button>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Home