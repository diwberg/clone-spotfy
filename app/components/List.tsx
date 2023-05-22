import { BsDot } from "react-icons/bs";
import { Cover } from "./Cover";

export function List() {
    const img = "https://upload.wikimedia.org/wikipedia/pt/8/81/CAPA_CD_NOTHING_BUT_THE_BEAT.jpg"

    return (
        <div className="flex flex-nowrap overflow-hidden gap-1 max-h-20">
            <div className="hover:bg-zinc-800 p-1 rounded-lg overflow-hidden grid grid-cols-2">
                <Cover url={img} />

                <div className="self-center">
                    <div className="overflow-hidden">
                    <strong className="text-sm max-h-5 whitespace-nowrap">David Guetta</strong>
                    </div> 
                    <div className="overflow-hidden text-xs flex self-center">Playlist <BsDot className="" size={20} /> Minha Playlist</div>

                </div>
            </div>
        </div>
    )
}