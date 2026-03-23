import React from 'react'
import { useCart } from '../Context/Cartcontext';
import { X } from "lucide-react";

const CartItem = ({ item }) => {
  const { addToCart, removeFromCart } = useCart();

  const increaseQ = () => addToCart(item);
  const decreaseQ = () => removeFromCart(item.id);

  return (
    <>
      <div className='flex flex-col justify-between p-4 sm:p-6 mb-4 bg-gray-900 rounded-xl shadow-2xl border-gray-800 transition duration-300 hover:border-orange-600/50'>

        <div className='flex items-center space-x-4 w-full sm:w-auto'>
          <img src={item.image} alt={item.name} className='w-24 h-24 object-cover rounded-lg border-2 border-gray-800' />

          <div className=''>
            <h3 className='text-xl font-bold text-white line-clamp-1'>
              {item.name}
            </h3>

            <p className='text-lg text-orange-400 font-semibold'><span>&#x20B9;</span>{item.price.toFixed(2)}</p>
          </div>

        </div>

        <div className='flex items-center justify-between sm:justify-end w-full sm:w-2/5 sm:mt-0 space-x-4'>

          <div className='flex items-center bg-gray-800 border border-gray-700 rounded-full overflow-hidden'>

            {/* ➖ Decrease */}
            <button
              onClick={decreaseQ}
              className='w-8 h-8 flex items-center justify-center text-gray-300 hover:bg-red-600 hover:text-white transition'
            >
              -
            </button>

            {/* Quantity */}
            <span className='px-4 text-white font-semibold'>
              {item.quantity}
            </span>

            {/* ➕ Increase */}
            <button
              onClick={increaseQ}
              className='w-8 h-8 flex items-center justify-center text-gray-300 hover:bg-green-600 hover:text-white transition'
            >
              +
            </button>

          </div>

          <p className='font-extrabold text-orange-300 w-24 text-right hidden md:block'><span>&#8377;</span>{(item.price * item.quantity).toFixed(2)}</p>

          <button onClick={() => removeFromCart(item.id, true)} className='p-3 bg-red-800/20 text-red-400 rounded-full hover:bg-red-800/40 transition duration-150 shadow-md'>
            <X className='w-5 h-5' />
          </button>

        </div>

      </div>
    </>
  )
}

export default CartItem;
