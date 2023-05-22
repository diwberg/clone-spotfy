import { BiSearch, BiPlus, BiRightArrowAlt } from "react-icons/bi";
import { VscLibrary } from "react-icons/vsc";
import { AiOutlineCaretDown } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";

import { Button } from "./Button";
import { List } from "./List";

export function Library() {

  return (
    <nav className="space-y-5 bg-zinc-900 p-4 mt-4 rounded-md">
      <div className="flex">
        <a href="" title="Sua Biblioteca" className="flex align-items hover:text-zinc-50 transition duration-200 flex-auto gap-3 text-sm font-bold text-zinc-300"><VscLibrary size={28} /> <p className="self-center">Minha Biblioteca</p> </a>
        <div className="flex flex-1 text-zinc-300">
          <a href="#" title="Criar playlist ou pasta" className="hover:text-zinc-50 transition duration-200"><BiPlus size={24} /></a>
          <a href="#" title="Ampliar sua Biblioteca" className="hover:text-zinc-50 transition duration-200"><BiRightArrowAlt size={24} /></a>
        </div>
      </div>


      <div className="">
        <div className="space-x-2 relative flex flex-nowrap overflow-hidden">
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <div className=" r-0 ml-auto">
            <a className="bg-gradient-to-l from-zinc-700 from-1% block hover:bg-zinc-700 p-2 rounded-full text-sm font-semibold " href="#" ><MdArrowForwardIos size={18} className="" /></a>
          </div>
        </div>

      </div>

      <div className="flex text-zinc-300">
        <a href="#" className="flex-1 hover:text-zinc-50 transition duration-200"><BiSearch className="hover:bg-zinc-600 transition duration-200 py-1 box-border rounded-full" size={28} /></a>
        <div className="">
          <a href="#" className="flex flex-1 gap-1 items-center hover:text-zinc-50 transition duration-200"><p className="self-center">Recentes</p><AiOutlineCaretDown /></a>
        </div>

      </div>
      
          <List />
          <List />
          <List />
          <List />


    </nav>
  )
}