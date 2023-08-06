import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Laptop} alt ="/" />
            <div>
                <p>DATA ANALYTICS DASHBOARD</p>
                <h1>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum porro omnis, 
                    adipisci rerum iure mollitia ut architecto, 
                    optio quas excepturi magnam accusamus repellendus voluptates itaque.
                     Modi maiores voluptatem quia mollitia.
                </p>
            </div>

        </div>
    </div>
  )
}

export default Analytics