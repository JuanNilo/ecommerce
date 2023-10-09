'use client'
import React, { useState, useEffect } from "react";

import FormTemplate from "@/app/components/extras/forms/Form";

import { Styles, Colors } from "@/app/styles/style";
import Link from "next/link";
import DatosExtra from "./DatosExtra";

const {styleInput, styleLabel, styleButtomPrimary, styleButtomSecondary} = Styles;

const {primary, secondary, tertiary} = Colors;

function SignIn() {
    const [datosExtra, setDatosExtra] = useState(false);

    const handleRegister = () =>{
        setDatosExtra(!datosExtra);
    }

  return (
    <div>
      <form action="post">
      <FormTemplate>
        <div className="w-[80%]">

        <img 
            className="mx-auto pointer-events-none cursor-not-allowed w-[60%] 2xl:w-[80%]" 
            src={"https://media.discordapp.net/attachments/498604686077722655/1153122372115775559/logo-rectangular.jpg"} 
            alt={''}
        />
        <h1 className=" text-3xl 2xl:text-5xl my-2">Registrarse</h1>
        {/* Correo */}

        <label htmlFor="email" className={`${styleLabel}`}>
          Correo
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
          onChange={(e) => console.log(e.target.value)}
          className={styleInput}
        />
        {/* Contraseña */}
        <label htmlFor="password" className={`${styleLabel}`}>
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

        <label htmlFor="confirm-password" className={`${styleLabel}`}>
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
        </div>

        <div className="w-[80%]">
        <DatosExtra/>

        {/* Botones */}
        <button
          type="submit"
          className={`${styleButtomPrimary} `}
          >
          Registrarse
        </button>
        <Link href={"/user/login"}>
          <button className={`${styleButtomSecondary} `}>
            Iniciar Sesion
          </button>
        </Link>
          </div>

      </FormTemplate>
      </form>
    </div>
  );
}

export default SignIn;
