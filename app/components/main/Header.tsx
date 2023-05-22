import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { MdClose } from "react-icons/md";
export function Header() {

    return (
        <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-zinc-600 rounded-full">
                <FiChevronLeft size={24} />
            </button>
            <button className="p-2 hover:bg-zinc-600 rounded-full">
                <FiChevronRight size={24} />
            </button>

            <label className="flex-auto mr-1 relative">
                
                <span className="hover:text-zinc-50 transition duration-200 absolute inset-y-0 left-0 flex items-center pl-1"><BiSearch className="cursor-pointer p-2 mr-2 box-border rounded-full" size={38} /></span>

                <span className="hover:text-zinc-50 transition duration-200 absolute inset-y-0 right-0 flex items-center pr-1"><MdClose
                className="cursor-pointer p-2 ml-2 box-border rounded-full" size={38} /></span>

                <input className="bg-zinc-700 placeholder:italic placeholder:text-zinc-500 block w-full rounded-full py-4 px-10 focus:outline-none focus:border-zinc-700 focus:ring-zinc-500 focus:ring-1 sm:text-sm" placeholder="O que você quer ouvir?" type="text" name="search" />
            
            </label>

            <img src="https://github.com/diwberg.png" alt="Profile" className="w-11 h-11 rounded-full" />

        </div>

    )
}