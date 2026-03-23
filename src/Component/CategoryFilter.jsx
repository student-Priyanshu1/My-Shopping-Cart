import React from 'react'
import { initialProducts } from '../Data/Product';
import { Tag } from "lucide-react";

const availableCategory = [
  "All", ...new Set(initialProducts.map(p => p.category))
]

const CategoryFilter = ({selectedCategory, setselectedCategory}) => {

  return (
    <div className='flex flex-wrap gap-3 border-b border-gray-800 pb-6'>

      <Tag className='w-6 h-6 text-orange-500 mt-2 ml-3 hidden sm:block' />

      {availableCategory.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-orange-500 transition ${selectedCategory === category ? 'bg-orange-600 text-white shadow-orange-800/50' : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-orange-400 border border-gray-700'}`}
        onClick={()=>setselectedCategory(category)}>
          {category}
        </button>
      ))}

    </div>
  )
}

export default CategoryFilter;