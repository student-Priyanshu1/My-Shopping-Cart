import React from 'react'
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from '../Context/Cartcontext';

const ProductCart = ({ product }) => {
  const {addToCart} = useCart();
  return (
    <>
      <div className='bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col h-full transition duration-500 transform border border-gray-800 group hover:scale-[1.03] hover:shadow-orange-900/40'>
        <Link className='relative cursor-pointer overflow-hidden' to={`/product/${product.id}`}>

          <img src={product.image} alt={product.name} className='w-full h-56 object-cover transition duration-500 group-hover:scale-110 group-hover:opacity-90 object-center' />

          <div className='absoulte bottom-0 left-0 bg-orange-600/95 text-white px-5 py-2 text-xl font-extrabold rounded-sm shadow-lg'>
            <span>&#x20B9;</span>{product.price.toFixed(2)}
          </div>
        </Link>

        <div className='p-5 flex flex-col grow'>
          <Link to={`/product/${product.id}`}>
            <h3 className='text-2xl font-extrabold text-white cursor-pointer mb-2 hover:text-orange-400 tarsition duration-200 line-clamp-1'>
              {product.name}
            </h3>
          </Link>

          <div className='text-gray-400 text-sm mb-4 line-clamp-3'>
            {product.description}
          </div>
          <div className='flex items-center text-xs text-gray-500 mb-4'>
            <span className='px-3 py-1 bg-gray-800 border border-gray-700 rounded-full font-semibold'>{product.category}</span>
          </div>

          <button className='max-auto w-full py-3 bg-orange-600 text-white font-bold rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider' onClick={()=>addToCart(product)}>
            <ShoppingCart className='size-8'/>
            <span className='p-1'>Add to cart</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductCart;
