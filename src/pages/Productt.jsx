import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemContext } from '../context/ItemContext';

const Product = () => {
  const { productId } = useParams();
  const { items, currency, addToCart } = useContext(ItemContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

const fetchProductData = async ()=>{
    items.map((item)=>{
        if(item._id === productId){
            setProductData(item)
            setImage(item.image[0]);
            console.log(item);
            return null;
        }
    })
}

  useEffect(() => {
    fetchProductData();
  }, [productId, items]); // Add `items` as a dependency

  if (!productData) {
    return <div className="opacity-0"></div>; // Show a placeholder if productData is not available
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity easd-in duration-500 opacity-100 containerSize">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
       
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row"> 
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="Main product" />
          </div>
        </div>

        {/* Info Section */}
        <div className="flex-[1.3] flex flex-col items-start justify-items-center mt-10 mobile:items-center">
          <h1 className="title text-[40px] mobile:text-[30px]">{productData.name}</h1>
          <p className="description pr-[4rem] text-justify mt-4 mobile:pr-0">
            {productData.description}
          </p>
          <div className="flex flex-col place-self-start">
            <p className="mt-7 text-3xl">
              {currency}
              {productData.price}
            </p>
{/* 
            <div className="colors flex mt-7 text-2xl">
              Colors:
              {productData.colors?.map((color, index) => (
                <div
                  key={index}
                  className={`colorSelect bg-${color}-600`}
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div> */}

            <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div className="flex gap-2">
                {productData.sizes?.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSize(item)}
                    className={`border py-2 px-4 bg-gray-100 ${
                      item === size ? 'border-orange-500' : ''
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id, size)}
            className="text-white bg-black px-8 py-3 text-sm active:bg-gray-700"
          >
            Add to Cart
          </button>

          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% original product.</p>
            <p>Cash on delivery is available for this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description & Reviews Section */}
      <div className="mt-20 mb-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>Sample description text.</p>
          <p>Sample review text.</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
