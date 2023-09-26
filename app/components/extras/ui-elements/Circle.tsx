import { Colors } from "../../../styles/style"
const { tertiary} = Colors;

export default function Circle({children}: {
    children: React.ReactNode
  }){
    return(
        <div 
            style={{backgroundColor: tertiary}}
            className="rounded-full w-[20px] p-4 block mx-2 md:hidden"
        >
            {children}
        </div>
    )
}