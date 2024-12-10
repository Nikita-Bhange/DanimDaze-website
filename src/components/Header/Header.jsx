
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Link, NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { ItemContext } from "../../context/ItemContext";

const Navbar = () => {

  const style ='text-3xl, cursor-pointer, ml-[25px] mobile:ml-[5px]';
//desrtuctureing of componenets from context file
  const {setShowSearch , getCartCount} = useContext(ItemContext);

  return (
    <div className="navbar h-[60px] shadow-lg  relative   ">
      <div className="wrapper m-5  pr-[20px]  flex justify-between items-center mobile:pl-0 mobile:pr-0">
        
                {/* Logo */}
          <div className="center flex-1 text-left pl-5  mobile:ml-6">
              <div className = " logo font-bold text-3xl mobile:text-sm">DenimDaze</div>
          </div>
        

          {/* Right Side */}
          <ul className="hidden sm:flex gap-2 text-m font-bold text-gray-700">
            
           <NavLink  to="/" className={style}>
            <p>Home</p>
            <hr className='w-4/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to="/collection" className={style}>
              <p>Collection</p>
              <hr className='w-4/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
              <NavLink to="/register" className={style}>
              <p>Register</p>
              <hr className='w-4/4 border-none h-[1.5px] bg-gray-700 hidden' />
              </NavLink>
           
              
              </ul>
              
              <Search onClick={()=>setShowSearch(true)} className="cursor-pointer ml-10" />

              <Link to="/cart" className={style}>
                  <ShoppingCartOutlined/>
                   <p className='absolute right-7 top-0 rounded-xl font-bold w-5 text-center  bg-black text-white aspect-squarerounded-full text-[12px]' >{getCartCount()}</p>
              </Link>
        

      </div>
    </div>
  );
};

export default Navbar;
