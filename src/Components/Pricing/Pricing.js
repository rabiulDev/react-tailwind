import React from 'react'
import PricingOption from '../PricingOption/PricingOption'

const Pricing = () => {
    const pricingOption = [
        { id: 1, name: "Free", price: 0 },
        { id: 2, name: "Regular", price: 9.99 },
        { id: 3, name: "Premium", price: 19.99 }
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best Deals of the town</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit repellendus nobis excepturi culpa nam eum iste, adipisci perspiciatis eius ducimus?</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {pricingOption.map(option => <PricingOption key={option.id} option={option} />)}
            </div>

        </div>
    )
}

export default Pricing