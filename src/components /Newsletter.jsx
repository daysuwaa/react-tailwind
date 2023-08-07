import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div>
                    <input 
                    type='email' 
                    placeholder='Enter Email'
                     />
                     <button className='bg-[#00df9a] w-[200px] rounded-md ml-4 px-6 my-6 mx-auto py-3 text-black'>Notify Me</button>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Newsletter