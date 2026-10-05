import { useState } from "react";

const SearchFilter = () => {

    const products = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

    const [ search , setSearch]=useState("");
    const filteredProducts = products.filter(product =>
        product.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-lg p-6">
        
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Search Filter
        </h1>

        <p className="text-gray-500 mb-5">
          Search for your favorite products
        </p>

        <input
          type="text"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
        />

        <div className="mt-5 space-y-3">
         {filteredProducts.map((product)=>( 
            <div key={product} className="p-4 bg-gray-50 rounded-xl">
                {product}
          </div>
         ))};
        </div>

      </div>
    </div>
  );
};

export default SearchFilter;