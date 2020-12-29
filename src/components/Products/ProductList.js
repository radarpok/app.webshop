import React from "react";
import Product from "./Product";

export default function ProductList({ title, products }) {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <div className="products-center">
        {products.map(item => {
        // a "..." egy spread operator, ami kiterjeszti a terméklista (a beimportált url-ben lévő termékek) array iterálását nulla - vagy több argumentumra, vagy elemre (whoah, utánanézni még)
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
