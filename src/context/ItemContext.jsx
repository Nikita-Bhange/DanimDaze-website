import { createContext, useEffect,  useState } from "react";
import { items } from "../assets/assets.js";
import { toast } from "react-toastify";
export const ItemContext = createContext();

const ItemContextProvider =(props)=>{

    const delivery_fee =10
    const currency ='Rs'
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = async(itemId, size)=>{
        if(!size){
            toast.error('Select product size');
            return 
        }

        let cartData = structuredClone(cartItems)
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] +=1;
            }else{
                cartData[itemId][size] =1
            }
        }
        else{
            cartData[itemId] ={}
            cartData[itemId][size] =1
        }
        setCartItems(cartData)
    }

       const getCartCount=()=>{
        let totalCount =0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalCount += cartItems[items][item];
                    }
                }
                catch(error){

                }
            }
        }
        return totalCount
       }

       const updateQuantity= async(itemId, size, quantity)=>{
            let cartData = structuredClone(cartItems)
            cartData[itemId][size] = quantity
            setCartItems(cartData)
       }

       const getCartAmount=()=>{
        let totalAmount =0;
        for(const products in cartItems){
            let itemInfo = items.find((item)=> item._id===products)
            for(const product in cartItems[products]){
                try{
                    if(cartItems[products][product]>0){
                        totalAmount += itemInfo.price *cartItems[products][product];
                    }
                } catch(error){

                }
            }
        }
        return totalAmount
       }
    const value={
        items, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch, cartItems, 
        addToCart,getCartCount, updateQuantity, getCartAmount
    }

    return (
        <ItemContext.Provider value={value}>
            {props.children}
        </ItemContext.Provider>
    )
}

export default ItemContextProvider