import React, { useEffect, useState }  from 'react'
import { ItemContext } from '../context/ItemContext'
import { Search } from "@material-ui/icons";
import {Close} from '@material-ui/icons'
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const {search, setSearch,showSearch, setShowSearch} = useContext(ItemContext) 
  const location = useLocation();
  const [visible, setVisible] = useState(true);

  useEffect(()=>{
    if(location.pathname.includes('collection') && showSearch){
      setVisible(true)
    }else{
      setVisible(false)
    }
  },[location])
    return showSearch && visible ? (
   <div className='border-t border-b bg-gray-50 text-center'>
    <div className='inline-flex items-center justify-center border border-gray-400 px-5  py-2 my-5 mx-3 rounded:full w-3/4 sm:w-1/2 '>
      <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherittext-sm' type='text' placeholder='search...' />
      <Search />
      </div>
      <Close  className='cursor-pointer' onClick={()=>setShowSearch(false)} />
       </div>
  ):null
}

export default SearchBar