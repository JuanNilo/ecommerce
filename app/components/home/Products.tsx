
import React from "react";
import ProductCard from "../extras/ui-elements/ProductCard";
const fetchProducts = () => {
    return fetch("https://fakestoreapi.com/products/category/electronics")
    .then(response => response.json())
  }

export default async function Products() {

    interface Product {
        id: number;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
        rating: {
          rate: number;
          count: number;
        };
      }

    const products = await fetchProducts()
     

    return (
        <div className="w-[100%] h-[100%]">
            <h1>Productos</h1>
            <ul className="grid grid-cols-3 gap-4">
              {products.map((product : Product )=> (
                <li key={product.id} className="">
                   <ProductCard product={product} />
                </li>
              ))}
            </ul>
          </div>
    );
}
