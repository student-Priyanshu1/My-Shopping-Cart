import React from 'react'
import { Search } from "lucide-react";

const SearchFilter = ({ serachTerm, setserachTerm }) => {
  return (
    <div className="mb-5 bg-gray-900 rounded-2xl shadow-xl border border-gray-800 p-3">

      <div className="flex items-center border border-gray-700 rounded-xl overflow-hidden 
      focus-within:ring-4 focus-within:ring-orange-600/50 transition duration-300 bg-gray-800">

        <Search className="w-5 h-5 text-gray-400 ml-4" />

        <input
          type="text"
          placeholder="Search Products..."
          className="w-full bg-transparent outline-none px-3 py-2 text-white placeholder-gray-500 text-base font-medium" value={serachTerm} onChange={(e) => setserachTerm(e.target.value)} />

      </div>
    </div>
  )
}

export default SearchFilter;