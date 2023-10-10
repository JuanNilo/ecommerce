import { BsSearch, BsCart2 } from "react-icons/bs";
import { Colors } from "@/app/styles/style";

const {primary, secondary, tertiary} = Colors;


export default function SearchBar(){

    return(
        <section
        style={{backgroundColor:tertiary}}
        className="rounded-full w-[35%] ml-10 flex items-center"
    >
        <input 
            type="text" 
            name=""
            id=""
            placeholder="Buscar productos..."
            style={{backgroundColor:tertiary}}
            className="p-2 border-none rounded-full w-[90%] placeholder-gray-950 text-black font-bold"
        />
        <BsSearch 
            className="text-black mx-auto"
        />
        </section> 
    )
}