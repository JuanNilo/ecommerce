import React from "react";
import ProductCard from "../extras/ui-elements/ProductCard";
import { products } from "./../extras/products/productos.json";
import { Colors } from "@/app/styles/style";
import Link from "next/link";

const {tertiary, brand} = Colors

export default async function Products() {  

    return (
        <div className="w-[100%] h-[100%] text-center">
            <h2 className=" text-3xl mb-6" style={{color: tertiary}}>Productos</h2>
            <ul className="grid grid-cols-4 gap-4">
              {products.map((product )=> (
                <Link href={`productos/${product.id}`} key={product.id} style={{backgroundColor: brand}} className=" text-center rounded-xl">
                  <div className="h-[20%] px-2">
                      <p className=" text-2xl py-3 font-bold"
                        style={{color: tertiary}}>
                          {product.nombre}
                      </p>
                   </div>
                   <div className=" bg-white h-[60%] flex items-center justify-center">
                    <img src={product.imagen} alt="" className="h-[80%]"/>
                   </div>
                </Link>
              ))}
            </ul>
          </div>
    );
}
