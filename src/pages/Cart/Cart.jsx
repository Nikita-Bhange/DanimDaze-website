import React,{useContext, useState ,useEffect} from "react";
import { ItemContext } from "../../context/ItemContext";
import Title from "../../components/Title";
import { Delete } from "@material-ui/icons";
import CartTotal from "../../components/CartTotal";
import { Link } from "react-router-dom";
const Cart = () => {
  const {items , currency, cartItems, updateQuantity} = useContext(ItemContext)

  const  [cartData, setCartData] = useState([]);

  useEffect(()=>{
    const tempData =[];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item]>0){
          tempData.push({
            _id: items,
            size:item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData)
    console.log(tempData)
  },[cartItems])


  return (
    <div className="border-t pt-14 containerSize">
      <div className='text-2xl mb-3'>
        <Title  text1={'YOUR'}  text2={' CART'}/>
      </div>
      <div>
        {
          cartData.map((item,index)=>{
            const productData = items.find((product)=> product._id === item._id);

            return(
              <div key={index} className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr  sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
                <div className="flex items-start gap-6">
                  <img className='w-16 sm:w-20' src={productData.image[0]}/>
                  <div>
                    <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData.price}</p>
                      <p className="px-2 sm:px-3 sm:py-1 borderbg-slate-50">{item.size}</p>
                    </div>
                  </div>
                </div>
                <input onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size,Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quality} />
                <Delete  onClick={()=>updateQuantity(item._id, item.size,0)} className="w-4 cursor-pointer mr-4 sm:w-5"/>
              
              </div>
            )
          })
        }
      </div>

      <div className=" justify-end my-20">
        <div className="w-full sm:w-[450px]"><CartTotal/></div>
        <div className="w-full ">
        <Link to='/placeorder'  className="bg-black text-white text-sm  px-8 py-3"><button className="mt-8">PROCEED TO CHECKOUT</button></Link>
        </div>
      </div>
 </div>

  );
};

export default Cart;