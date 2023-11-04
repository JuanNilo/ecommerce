'use client'
import { Styles, Colors } from "@/app/styles/style";
import React, { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";

const { primary, secondary, tertiary } = Colors;
function homePage() {
    return (
        /* Rectangulo principal del usuario */
        <div
            style={{ backgroundColor: tertiary }}
            className="my-10 mx-20 rounded-md flex grid grid-cols-3 gap-4 justify-items-auto p-2"
        >
            <div className="h-[500px] rounded-md flex-auto box-content p-4 cols-span-1">
                {/* Rectangulo datos del usuario */}
                <div
                    style={{ background: primary }}
                    className="h-[95%] w-[350px] rounded-md flex-col relative"
                >
                    {/* Botón de edición */}
                    <button className="absolute top-0 right-0 m-1 p-2">
                        <BiEdit className="text-[2rem] fill-white hover:fill-[#ff7795] transition-all" />
                    </button>
                    {/* Contenedor de la imagen */}
                    <div className="flex items-center justify-center h-[240px] p-4 m-2">
                        <img
                            className="h-full rounded-full ring-white"
                            src="https://media.discordapp.net/attachments/602383815486210058/1161866833469640714/man-with-beard-and-purple-shirt-with-purple-shirt-on-it_745528-3370.png?ex=6539dbcf&is=652766cf&hm=00a3c2d494290a501603e2ec75c398c1e4355b2f3adc3e7ea762d34e7471533a&="
                            alt=""
                        />
                    </div>
                    {/* Especificaciones del usuario */}
                    <a className=" bg-white dark:bg-gray-800 text-xl text-gray-900 uppercase dark:text-gray-400 m-4 flex items-center justify-center">Camilonga</a>
                    <a className=" bg-white dark:bg-gray-800 text-xl text-gray-900 uppercase dark:text-gray-400 m-4 flex items-center justify-center">Camilonga@longa.cl</a>
                    <a className=" bg-white dark:bg-gray-800 text-xl text-gray-900 uppercase dark:text-gray-400 m-4 flex items-center justify-center">66.666.666-6</a>
                    <a className=" bg-white dark:bg-gray-800 text-xl text-gray-900 uppercase dark:text-gray-400 m-4 flex items-center justify-center">VallenarCity</a>
                </div>
            </div>
            {/* Tabla datos con registro compra*/}
            <div
                style={{ background: primary }}
                className="h-[89%] w-[835px] rounded-md overflow-auto cols-span-2 mt-6"
            >
                <table className="w-full text-xl text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xl text-gray-900 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID Compra
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fecha
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Precio Total
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Productos ?
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                01
                            </th>
                            <td className="px-6 py-4">
                                10/10/2010
                            </td>
                            <td className="px-6 py-4">
                                $8000
                            </td>
                            <td className="px-6 py-4">
                                ?
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div >
    );
}

export default homePage;