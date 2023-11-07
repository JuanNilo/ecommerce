
import React from 'react';
import { Colors } from '../styles/style';
import { products } from "./../components/extras/products/productos.json";
import ProductListCard from '../components/extras/products/productListCard';
const {primary, secondary, tertiary} = Colors;

export default function Carro() {

    const productos = products;
    return (
        <div className='flex justify-center items-center h-[100%] p-10'>

        <div className=" h-[80vh] w-[80%] text-center p-10 rounded-md shadow-xl overflow-y-scroll"
            style={{backgroundColor: tertiary}}
            >
            <h1
                className='text-4xl font-bold'
            >Carro de compras</h1>
            {productos ? (
                // Renderizar los productos
                <ul>
                    {productos.map((producto) => (
                        // <li key={producto.id}>{producto.nombre}</li>
                        <ProductListCard nombre={producto.nombre} imagen={producto.imagen} precio={producto.precio}/>
                    ))}
                </ul>
            ) : (
                // Mostrar mensaje de que no hay productos
                <p>No hay productos disponibles</p>
            )}
        </div>
        </div>
    );
};

