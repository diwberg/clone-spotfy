import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { Library } from "./Library";

interface NavProps{
    library?: boolean
}

export function Nav({ library }: NavProps) {

    if(library){
        return <Library />
    }else{
        return (
            <div>
            <nav className="space-y-5 bg-zinc-900 p-4 rounded-md">

                <a href="" className="flex transition duration-200 hover:text-zinc-50 item-center gap-3 text-sm font-bold text-zinc-300"><HiHome size={28} /><p className="self-center"> Home</p></a>
                <a href="" className="flex hover:text-zinc-50 item-center transition duration-200 gap-3 text-sm font-bold text-zinc-300"><BiSearch size={28} /><p className="self-center">Search</p></a>
            </nav>
        </div>
        )
    }
}