import React, { useState } from 'react';
import SearchFilter from '../Component/SearchFilter';
import CategoryFilter from '../Component/CategoryFilter';
import { useCart } from '../Context/Cartcontext';
import ProductCart from '../Component/ProductCart';

const ProductList = () => {
  const { products } = useCart();

  const [serachTerm, setserachTerm] = useState("");
  const [selectedCategory, setselectedCategory] = useState("All");

  const filterProduct = () => {
    return products.filter((product) => {

      const mathSearch = product.name.toLowerCase().includes(serachTerm.toLowerCase()) || product.description.toLowerCase().includes(serachTerm.toLowerCase())

      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;

      return mathSearch && matchesCategory;

    });
  }


  return (
    <div className="container mx-auto px-4 md:px-8 pt-8">

      <SearchFilter serachTerm={serachTerm} setserachTerm={setserachTerm} />
      <CategoryFilter selectedCategory={selectedCategory} setselectedCategory={setselectedCategory}/>

      <h2 className='text-white text-2xl mx-auto font-extrabold px-4 md:px-8 py-2'>
        Featured Gear ({products.length})
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center'>

        {filterProduct().map((product, index) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>

    </div>
  )
}

export default ProductList;