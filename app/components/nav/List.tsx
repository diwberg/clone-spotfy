import { BsDot } from "react-icons/bs";
import { Cover } from "../Cover";

interface ListProps {
    type: "playlist" | "author",
    url: string
}

export function List({ type, url }: ListProps) {


    return (

        <div>
                    <div className="grid grid-cols-3 gap-x-2 overflow-hidden  cursor-pointer hover:bg-zinc-800 rounded-lg">
            <div className="col-span-1 ">
                <Cover url={url} type={type} />
            </div>

            <div className="col-span-2 grid grid-cols-1 grid-rows-2 content-center px-1">
                <div className="overflow-hidden">
                    <strong className="text-sm font-semibold whitespace-nowrap">{type}</strong>
                </div>
                <div className="overflow-hidden whitespace-nowrap text-xs flex ">Playlist <BsDot size={20} />Artista</div>
            </div>

        </div>
        </div>


    )
}