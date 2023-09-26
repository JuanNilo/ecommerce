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
                titulo={'Registrar cuenta'}
                subtitulo={"Ingrese sus datos para registrar cuenta"}
            >
                {/* Correo */}
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
                {/* Contraseña */}
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
                {/* Confirmar Contraseña */}

                <label
                    htmlFor="confirm-password"
                    className={`${styleLabel}`}
                >
                    Confirmar contraseña
                </label>
                
                <input 
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    autoComplete="current-password"
                    required
                    className={styleInput}
                />

                {/* Botones */}
                <button
                    type="submit"
                    className={`${styleButtomPrimary} `}
                >
                    Registrarse
                </button>
                <Link href={'/user/login'}>
                    <button
                        
                        className={`${styleButtomSecondary} `}
                        >
                        Iniciar Sesion
                    </button>
                </Link>
            </FormTemplate>
        </div>
    )
}