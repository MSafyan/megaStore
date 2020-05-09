import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import PreLoader from "../layout/PreLoader";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
    //eslint-disable-nest-line
  }, []);

  const getProducts = async () => {
    setLoading(true);
    const res = await fetch("/products");
    const data = await res.json();
    console.log(data);
    setProducts(data);
    setLoading(false);
  };
  if (loading) {
    return <PreLoader />;
  }
  return (
    <ul className="row">
      <li className="">
        <h4 className="center">Products</h4>
      </li>
      {!loading && products.length === 0 ? (
        <p className="center">No Logs to show</p>
      ) : (
        products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))
      )}
    </ul>
  );
};

export default Products;
