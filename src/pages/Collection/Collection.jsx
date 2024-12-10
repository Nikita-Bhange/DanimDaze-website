    import React, { useContext, useEffect, useState } from 'react'
    import { ItemContext } from '../../context/ItemContext'
    import Title from '../../components/Title.jsx'
    import ProductItem from '../../components/ProductItem'
    


    const Collection = () => {
        const {items, search, showSearch} = useContext(ItemContext);
        const [showFilter, setShowFilter] = useState(false);
        const [filterProducts, setFilterProducts] = useState([]);
        const [category, setCategory] = useState([]);
        const [SubCategory, setSubCategory] = useState([]);
        const [sortType, setSortType]= useState('relavent');

        

        const toggleCategory =(e)=>{
            if(category.includes(e.target.value)){
                setCategory(prev=> prev.filter(item=> item !== e.target.value))
            }else{
                setCategory(prev =>[...prev, e.target.value]);
            }
        }

        const toggleSubCategory =(e)=>{
            if(SubCategory.includes(e.target.value)){
                setSubCategory(prev=> prev.filter(item=> item !== e.target.value))
            }else{
                setSubCategory(prev =>[...prev, e.target.value]);
            }
        }
        const applyFilter = () => { 
            if (!items) {
                console.error('Product is undefined'); 
                return; 
            } 
            let productCopy = items.slice();
            if(showSearch && search){
                productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
            }
           
            if (category.length > 0) { 
                productCopy = productCopy.filter(item => category.includes(item.category));
            } if (SubCategory.length > 0) { 
                productCopy = productCopy.filter(item => SubCategory.includes(item.SubCategory));
            }

            setFilterProducts(productCopy)
            }

            const sortProduct=()=>{
                let fpCopy = filterProducts.slice()
                switch(sortType){
                    case 'low-high':
                        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)))
                        break;
                    case 'high-low':
                        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
                        break;
                    default:
                        applyFilter()
                        break;
                }
            }
       
       useEffect(() => {
                setFilterProducts(items);
         }, [items]);

        useEffect(()=>{
            applyFilter()
        },[category, SubCategory, search, showSearch])


        useEffect(()=>{
            sortProduct()
        },[sortType])



    return (
        <div className='containerSize flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            <div className='min-w-60'>
                <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
                <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center'>
                    <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' :''}`} />
                </p>

                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden' } sm:block`}>
                    <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p classname='flex gap-2'>
                            <input className='w-3 mr-2' type='checkbox' value={'Men'} onChange={toggleCategory}/>Men
                        </p>
                        <p classname='flex gap-2'>
                            <input className='w-3 mr-2' type='checkbox' value={'Women'}  onChange={toggleCategory}/>Women
                        </p>
                        <p classname='flex gap-2'>
                            <input className='w-3 mr-2' type='checkbox' value={'Kids'}   onChange={toggleCategory}/>Kids
                        </p>
                    </div>
                </div>

                <div className="border border-gray-300 pl-5 py-3 my-6 ${showFilter ? '' :'hidden' }">
                    <p className='mb-3 text-sm font-medium'>Type</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p classname='flex gap-2'>
                            <input className='w-3 mr-2' type='checkbox' value={'Topwear'}   onChange={toggleSubCategory} />Topwear
                        </p>
                        <p classname='flex gap-2'>
                            <input className='w-3 mr-2' type='checkbox' value={'Bottomwear'}   onChange={toggleSubCategory} />Bottomwear
                        </p>
                        <p classname='flex gap-2'>
                            <input className='w-3 mr-2' type='checkbox' value={'combo'}  onChange={toggleSubCategory} />combo
                        </p>
                    </div>
                </div>

                <select  onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm p-3 pr-4'>
                        <option value='relavent'>Sort by: Relavent</option>
                        <option value='low-high'>Sort by: Low to High</option>
                        <option value='high-low'>Sort by: High to low</option>
                </select>
            </div>

            {/* right side */ }
            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title text1={'View'} text2={'  Collections'} />  
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 gap-y-6'>{
                filterProducts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
  
                ))
                }

                </div>

            </div>
        </div>
    )
    }

    export default Collection