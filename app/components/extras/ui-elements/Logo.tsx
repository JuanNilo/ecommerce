import Link from "next/link"

export default function Logo(){
    return(
        <Link href={'/'}>
                <h1 id="store-name"
                    className="text-4xl flex-none"
                >
                    MOE'S
                </h1>
                </Link>
    )
}