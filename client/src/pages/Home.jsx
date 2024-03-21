import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import { useLoaderData } from "react-router-dom";
// import Footer from "../components/Footer";

// import { productsData } from "../api/Api";

const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setProducts(data.data);
  }, [data]);
  console.log(products);

  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
};

export default Home;
