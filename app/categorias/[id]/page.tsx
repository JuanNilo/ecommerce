import { Colors } from "@/app/styles/style"

const {tertiary} = Colors;

export default function Categoria({params}){
    const { id } = params
    
    return(
        <div className="text-center py-8">
            <h1 style={{color:tertiary}} className="text-5xl">
                {id}
            </h1>
        </div>
    )
}