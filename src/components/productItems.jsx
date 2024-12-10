import React from 'react'
import { ItemContext } from '../context/ItemContext'

export const productItems = ({id ,image,name,price}) => {

    const {currency} = useContext(ItemContext);

  return (
    <Link className ='text-gray-700 cursor-pointer' to={'/product/${id}'}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt=''/>
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}
