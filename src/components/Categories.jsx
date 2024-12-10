import React from 'react';
import { ApiCategories } from '../componentApi/CategoryApi';
import { Link } from 'react-router-dom';
const Categories = () => {
  return( 
  <div className='flex justify-between items-center p-5 mobile:flex-col px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    {ApiCategories.map((item)=>(
        
        <div className='flex-1 m-2 shadow-lg rounded-md overflow-hidden relative'>
      <img src={item.src} className="w-[100%]" alt='category_img'/>
      <div className='flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col'>
          <h2 className='text-white font-medium text-[30px]'>{item.title}</h2>
         {/* <Link to="/Products" className='btn'><buttton >SEE MORE</buttton></Link> */}
      </div>
  </div>
    ))}
  </div>
  )
};

export default Categories;
