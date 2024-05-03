import React from 'react';
import AddtoCart from './AddtoCart';

const ProductCard = () => {
  return (
    <div className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-600" >
        <AddtoCart />
    </div>
  )
}

export default ProductCard