import { MdClose } from "react-icons/md";
export function CardRecent() {

    return (
        <div>
            <div className="w-40 h-56 bg-zinc-800 rounded-md relative">
                <MdClose
                    className="cursor-pointer absolute inset-y-0 right-0 m-1 bg-zinc-700/40 rounded-full hover:bg-zinc-600" size={24} />
                <div className="justify-center flex">
                    <img className="rounded-lg w-32 mt-4 justify-self-center" src="https://akamai.sscdn.co/tb/letras-blog/wp-content/uploads/2019/10/781160f-11856069_800_800.jpg" alt="Album" />
                </div>
                <div className="grid grid-rows-2 overflow-hidden items-center ">

                    <strong className="justify-self-center overflow-hidden  text-sm max-h-5 whitespace-nowrap">Linking Park</strong>

                    <strong className="justify-self-center overflow-hidden text-xs">
                        Playlist Minha Playlist
                    </strong>


                </div>

            </div>
        </div>
    )
}