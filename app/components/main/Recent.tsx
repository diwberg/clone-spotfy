import { CardRecent } from "./CardRecent";

export function Recent() {

    return (
        <div className="">
            <div className="">
                <div className="py-4 flex justify-between">
                    <a href="#" className="text-zinc-50 text-xl font-bold tracking-wide hover:underline">Buscas recentes</a>

                    <a href="#" className="text-zinc-500 hover:underline">Mostrar tudo</a>
                </div>
            </div>

            <div className="gap-4 flex flex-nowrap overflow-hidden scrollbar-hide break-inside-avoid-column">
                <CardRecent />
                <CardRecent />
                <CardRecent />
                <CardRecent />
                <CardRecent />

            </div>



        </div>

    )
}