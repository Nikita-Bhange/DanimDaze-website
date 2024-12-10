import React,{useContext , useState} from 'react'
import { ItemContext } from '../context/ItemContext'
import {Link} from "react-router-dom"
import { FavoriteBorderOutlined,ShoppingCartOutlined } from "@material-ui/icons";




const ProductItem = ({id,image,name,price}) => {

    const{currency} =useContext(ItemContext);
    
const iconStyle = 'h-[40px] w-[40px] rounded-full bg-white font-bold flex items-center justify-center m-3 hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer'
const [hoverEffects , setHoverEffects]=useState(' opacity-0')
  function handleHoverEnter() {
    setHoverEffects(' opacity-1 bg-[rgba(0,0,0,0.2)]')
  }

  function handleHoverExit(){
    setHoverEffects(' opacity-0')
    }


  return (
    <Link className='text-gray-700 cursor-pointer ' to={`/product/${id}`}>
      <div className="flex items-center justify-center  flex-1 min-w-[280px] min-h-[350px] m-4 mt-10 pl-3 pr-3 ml-5  overflow-hidden rounded-md shadow-lg relative" onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverExit}>
          <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt=''/>
          </div>
         <div className={`flex items-center justify-center absolute w-[100%] h-[100%] ease-in duration-100` + hoverEffects}>
            <div className={iconStyle}><ShoppingCartOutlined /></div>
            <div className={iconStyle}><FavoriteBorderOutlined /></div>
            <div className={iconStyle}><Link to ='/productpage'><button>BUY</button></Link></div>
          </div>
      </div>
      <div className='pl-10'>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
      </div>
    </Link>
  )
}

export default ProductItem
