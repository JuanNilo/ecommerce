'use client'
import React from "react";
import { useState, useEffect } from "react";

export default function Products() {

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

    const [products, setProducts] = useState<any>([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        // fetch("https://fakestoreapi.com/products?limit=10")
        //   .then(response => response.json())
        //   .then(data => {
        //     console.log(data);
        //     setProducts(...data);
        //   })
        //   .catch(error => console.log(error));
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>setProducts(json))
      };

    return (
        <div className="w-[100%] h-[70vh]">
            <h1>Productos</h1>
            {loadData()}
            {products.map((product: any) => (
              <div key={product.id} className=" w-[150px] h-[150px]">
                <p>Nombre</p>
                <h2>{product.title}</h2>
              </div>
            ))}
          </div>
    );
}
