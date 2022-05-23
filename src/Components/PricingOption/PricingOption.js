import React from 'react'

const PricingOption = ({option}) => {
    const {name, price} = option
  return (
    <div className='p-4 bg-white rounded-lg'>
        <h2 className='bg-indigo-300 py-2 rounded text-xl font-bold'>{name}</h2>
        <p>
            <span className='text-5xl font-bold'>{price}</span>
            <span className='text-xl font-bold text-gray-500'>/mo</span>
        </p>
    </div>
  )
}

export default PricingOption