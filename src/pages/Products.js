import React, { useContext } from "react";
import { ProductContext } from "../context/products";
import Loading from "../components/Loading";
import ProductList from "../components/Products/ProductList";

export default function Products() {
  const { loading, products } = React.useContext(ProductContext);

  // if loading is true, then I wanna return a loading component...
  if(loading){
    return <Loading/>
  }
  // ...then once I have my product, I just wanna return a product list, and I will pass it to the props
  return <ProductList title="our products" products={products} />;
}