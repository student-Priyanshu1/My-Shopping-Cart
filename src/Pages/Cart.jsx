import React from 'react'
import { useCart } from '../Context/Cartcontext';
import { Link } from 'react-router-dom';
import { ChevronLeft, Zap } from "lucide-react";
import CartItem from "../Component/CartItem";

const Cart = () => {
  const { cart, cartTotal, cartCount } = useCart();

  return (
    <div className="container mx-auto px-4 md:px-8 pt-8">

      {/* 🔙 Back Button */}
      <div className='flex items-center mb-8'>
        <Link 
          to="/" 
          className='flex items-center text-gray-400 hover:text-orange-400 transition font-semibold text-lg'
        >
          <ChevronLeft className='w-6 h-6 mr-1' />
          <span>Back to Store</span>
        </Link>
      </div>

      {/* 🛒 Heading */}
      <h2 className='text-3xl font-extrabold text-white mb-8 tracking-tight'>
        Shopping Cart ({cartCount})
      </h2>

      {/* 🧱 Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* 🧾 Cart Items */}
        <div className='lg:col-span-2 space-y-4'>
          {cart.length > 0 ? (
            cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))
          ) : (
            <div className='text-center text-gray-400 py-10'>
              <p className='text-xl mb-4'>Your cart is empty 🛒</p>
              <Link 
                to="/" 
                className='text-orange-400 hover:underline font-semibold'
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>

        {/* 💳 Order Summary */}
        <div className='lg:col-span-1 p-6 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 sticky top-20 h-fit'>
          
          <h3 className='text-2xl font-bold text-white mb-5 border-b border-gray-700 pb-3'>
            Order Summary
          </h3>

          <div className='space-y-4 text-gray-400'>
            
            <div className='flex justify-between text-lg'>
              <span>Subtotal</span>
              <span className='font-semibold text-white'>
                ₹{cartTotal.toFixed(2)}
              </span>
            </div>

            <div className='flex justify-between pt-4 border-t border-gray-700'>
              <span className='font-bold text-white'>Estimated Total</span>
              <span className='text-xl font-bold text-orange-400'>
                ₹{cartTotal.toFixed(2)}
              </span>
            </div>

          </div>

          {/* 🚀 Checkout Button */}
          <Link
            to="/checkout"
            className='w-full py-3 mt-6 bg-orange-600 text-white font-bold rounded-full shadow-lg shadow-orange-800/50 hover:bg-orange-700 transition flex items-center justify-center space-x-2 uppercase tracking-wide'
          >
            <Zap className='w-5 h-5'/>
            <span>Proceed to Checkout</span>
          </Link>

          <p className='text-xs text-gray-500 mt-4 text-center'>
            All transactions are encrypted and secure.
          </p>

        </div>

      </div>
    </div>
  )
}

export default Cart;