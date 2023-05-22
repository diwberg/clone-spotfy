import { BiPlus, BiRightArrowAlt } from "react-icons/bi";
import { VscLibrary } from "react-icons/vsc";

import { Button } from "../Button";


export function Header() {

    return (
        <div>
            <nav className="space-y-4 mb-3">
                <div className="grid grid-cols-3 grid-rows-2">
                    <a href="" title="Sua Biblioteca" className="flex col-span-2 row-span-2 hover:text-zinc-50 transition duration-200 items-center gap-3 text-sm font-bold text-zinc-300"><VscLibrary size={28} /> <p className="self-center">Minha Biblioteca</p> </a>

                    <div className="flex col-span-1 row-span-1  text-zinc-300 self-end justify-self-end">
                        <a href="#" title="Criar playlist ou pasta" className="hover:text-zinc-50 transition duration-200"><BiPlus size={24} /></a>
                        <a href="#" title="Ampliar sua Biblioteca" className="hover:text-zinc-50 transition duration-200"><BiRightArrowAlt size={24} /></a>
                    </div>
                </div>


                <div className="space-x-2 flex flex-nowrap overflow-hidden">
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                </div>
            </nav>
        </div>
    )
}