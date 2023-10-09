import React from "react";

import { Colors } from "@/app/styles/style"
import Image from "next/image";

const { primary, secondary, tertiary } = Colors

export default function FormTemplate({ titulo, subtitulo, children }: { titulo: string, subtitulo: string, children: React.ReactNode }) {
    return (
        <div
            style={{ backgroundColor: tertiary }}
            className="w-[100%] lg:w-[40%] mx-auto 2xl:h-[90vh] h-[85vh] shadow-xl shadow-gray-600 overflow-y-scroll"
        >
            <div
                className="flex min-h-full justify-center items-center px-6 py-8 lg:px-8"
            >
                <div
                    className="block min-h-full "
                >
                    {/* Titulo y subtitulo */}
                    <div
                        className="block gap-5 justify-center mb-10 text-center"
                    >
                        <img className="mx-auto pointer-events-none cursor-not-allowed w-[60%] 2xl:w-[80%]" src={"https://cdn.discordapp.com/attachments/602383815486210058/1160796413446328361/moe_s_store-removebg-preview.png?ex=6535f6e7&is=652381e7&hm=c83e7ce7a3d00bb88f9a02ca790793872b71c3fb553eb5e487822d057744f9c7&"} alt={titulo} />
                        <h1 className=" text-3xl 2xl:text-5xl my-2">{titulo}</h1>
                    </div>
                    {/* Contenido */}
                    <div className="grid grid-cols-2 gap-6">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}