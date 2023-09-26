import React from "react";

import FormTemplate from "@/app/components/extras/forms/Form";

import { Styles, Colors } from "@/app/styles/style";
import Link from "next/link";

const {styleInput, styleLabel, styleButtomPrimary, styleButtomSecondary} = Styles;

const {primary, secondary, tertiary} = Colors;

export default function Login(){
    return(
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
        </div>
    )
}