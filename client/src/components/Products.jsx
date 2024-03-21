import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  return (
    <div className='py-10 '>
      <div className='flex flex-col items-center gap-4 '>
        <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>
          Shopping Everyday
        </h1>
        <span className='w-20 h-[3px] bg-black'></span>
        <p className='max-w-[700px] text-gray-600 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fugit
          reprehenderit dolore est? Debitis voluptate id, quasi perferendis
          dolor quaerat, minus quisquam molestias, amet libero iusto porro rem
          doloremque alias! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Explicabo saepe, voluptatem maxime ut veritatis eius corrupti
          cumque.
        </p>
      </div>
      <div className='max-w-screen-xl text-center py-10 grid lg:grid-cols-4 md:grid-cols-2  sm:grid-cols-1 gap-10 mx-10'>
        {/* <ProductsCard /> */}
        {products.map((productItem) => (
          <ProductsCard key={productItem.id} product={productItem} />
        ))}
      </div>
    </div>
  );
};

export default Products;
