import React,{useContext, useEffect, useState} from 'react'
import { ItemContext } from '../context/ItemContext.jsx'
import Title from './Title'

import ProductItem from './ProductItem.jsx'
        



const LatestItems= () => {

    
    const {items} = useContext(ItemContext);
    const [latest, setLatest] = useState([]);
    useEffect(() => {
        setLatest(items.slice(0, 10));
}, []);


   return (
    <>
    <div className='my-10 containerSize'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'}  text2={'  COLLECTIONS'}  />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Elevate your wardrobe with our stunning new collection of dresses, designed to make you feel confident and stylish. From chic office wear to elegant evening gowns, we have something for every occasion.
            </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
            latest.map((item,index) => (
            
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          
               
            ))}
        </div>

    </div>
    </>
    
  )
}


export default LatestItems

   

  
  

  