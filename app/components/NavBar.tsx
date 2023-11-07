import Link from "next/link";
import { Colors } from "../styles/style"
import { AiOutlineUser } from "react-icons/ai";
import SearchBar from "./extras/ui-elements/SearchBar";
import Logo from "./extras/ui-elements/Logo";
import SelectoSucursal from "./extras/ui-elements/SelectorSucursal";
import Carrito from "./home/Carrito";

const {primary, secondary, tertiary} = Colors;

export default function NabBar(){
    return(
        <nav 
            style={{backgroundColor:primary,color:tertiary}}
            className="w-[100%] h-[15vh] 2xl:h-[10vh] flex items-center px-4"
        >
        {/* Lado derecho */}
        <div className="w-[50%] flex">
            <Logo/>
            <SelectoSucursal/>
            <SearchBar /> 
        </div>
        {/* Parte izquierda */}
        <div className="w-[50%] flex justify-end">
          <Carrito/>
          <Link 
            href={'/user/login'} 
            > 
            <div
                style={{backgroundColor: tertiary}}
                className="h-[50px] w-[50px] rounded-full flex cursor-pointer mx-2"
            >
                <AiOutlineUser size={40} className=" text-black m-auto"/>
            </div>
          </Link>
        </div>
        </nav>
    )
}