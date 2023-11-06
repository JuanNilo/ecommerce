import React from "react";

import FormTemplate from "@/app/components/extras/forms/Form";

import { Styles, Colors } from "@/app/styles/style";
import Link from "next/link";

const { styleInput, styleLabel, styleButtomPrimary, styleButtomSecondary } = Styles;

const { primary, secondary, tertiary } = Colors;

export default function Login() {
    return (
        /* Contenedor principal */
        <div
            style={{ backgroundColor: tertiary }}
            className="box-content h-[500px] w-9/12 mx-auto my-10 grid grid-cols-3 rounded-md"
        >
            {/*Contenedor de datos a ingresar*/}
            <div
                style={{ background: primary }}
                className="h-[90%] w-[330px] rounded-md flex-col relative mx-auto my-auto flex items-center"
            >
                <a className="text-4xl text-gray-900 dark:text-gray-400 m-4 flex items-center justify-center my-6">Inicio de Sesión</a>
                <a className="text-xl text-gray-900 dark:text-gray-400 flex items-center justify-center">Correo Electronico</a>
                <input
                    className="bg-white dark:bg-gray-800 text-xl text-gray-900 dark:text-gray-400 m-4 w-9/12 rounded-md"
                    type="text"
                    value=""
                    name="email"
                    required
                />
                <a className="text-xl text-gray-900 dark:text-gray-400 flex items-center justify-center">Contraseña</a>
                <input
                    className="bg-white dark:bg-gray-800 text-xl text-gray-900 dark:text-gray-400 m-4 w-9/12 rounded-md"
                    type="password"
                    value=""
                    name="password"
                    autoComplete=""
                    required
                />
                <button
                    type="submit"
                    className={`${styleButtomPrimary} `}
                >
                    Iniciar Sesion
                </button>
                <Link href={'/user/signin'}>
                    <button
                        className={`${styleButtomSecondary} `}
                    >
                        Registrase
                    </button>
                </Link>
            </div>
            {/*Contenedor Imagen*/}
            <div className="col-span-2 bg-teal-400 rounded-md">
                <img
                    className="ring-white rounded-md"
                    src="https://media.discordapp.net/attachments/602383815486210058/1170808208177242122/mOUSE.jpg?ex=655a631d&is=6547ee1d&hm=38416445b0e1571e658238467d14c817d12c41547540e5b68c83fb8364369643&=&width=1325&height=662"
                    alt=""
                />
            </div>
        </div>

        /*
        <div >
            <FormTemplate 
                titulo={'Iniciar sesion'}
                subtitulo={"Inicia sesion con tu cuenta"}
            >
                <label
                    htmlFor="email"
                    className={`${styleLabel}`}
                >
                    Correo
                </label>
                <input 
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    className={styleInput}
                />
                 <label
                    htmlFor="password"
                    className={`${styleLabel}`}
                >
                    Contraseña
                </label>
                <input 
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="current-password"
                    required
                    className={styleInput}
                />
                <button
                    type="submit"
                    className={`${styleButtomPrimary} `}
                >
                    Iniciar Sesion
                </button>
                <Link href={'/user/signin'}>
                    <button
                        
                        className={`${styleButtomSecondary} `}
                        >
                        Registrase
                    </button>
                </Link>
            </FormTemplate>
        </div> */
    )
}