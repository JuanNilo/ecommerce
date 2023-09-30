import React from "react";

import { Colors } from "@/app/styles/style"
import Image from "next/image";

const {primary, secondary, tertiary} = Colors

export default function FormTemplate({titulo, subtitulo, children}:{titulo: string, subtitulo: string, children: React.ReactNode} ){
    return(
        <div 
            style={{backgroundColor: tertiary}}
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
                        <img className="mx-auto pointer-events-none cursor-not-allowed w-[60%] 2xl:w-[80%]" src={"https://media.discordapp.net/attachments/498604686077722655/1153122372115775559/logo-rectangular.jpg"} alt={titulo}/>
                        <h1 className=" text-3xl 2xl:text-5xl my-2">{titulo}</h1>
                    </div>
                    {/* Contenido */}
                    {children}
                </div>
            </div>
        </div>
    )
}