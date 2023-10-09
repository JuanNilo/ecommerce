import React from "react";

import { Colors } from "@/app/styles/style"
import Image from "next/image";

const {primary, secondary, tertiary} = Colors

export default function FormTemplate({children}:{children: React.ReactNode} ){
    return(
        <div 
            style={{backgroundColor: tertiary}}
            className="w-[100%] lg:w-[90%] mx-auto 2xl:h-[90vh] h-[85%] shadow-xl shadow-gray-600 "
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