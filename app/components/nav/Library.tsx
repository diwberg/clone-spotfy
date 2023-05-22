import { BiSearch, } from "react-icons/bi";

import { AiOutlineCaretDown } from "react-icons/ai";

import { List } from "./List";
import { Header } from "./Header";

export function Library() {


  return (

    <nav className="bg-zinc-900 p-4 mt-4 rounded-md">
      <Header />

      <div className="flex items-center text-zinc-300 ">
        <label className="mr-1 relative">

          <span className="hover:text-zinc-50 transition duration-200 absolute inset-y-0 left-0 flex items-center pl-1"><BiSearch className="hover:bg-zinc-600 transition cursor-pointer duration-200 h-8 w-8 p-2 rounded-full" size={28} /></span>

          <input className="bg-zinc-700 placeholder:italic placeholder:text-zinc-500 block w-full rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-zinc-700 sm:text-sm" placeholder="Pesquisar..." type="text" name="search" />
        </label>

        <a href="#" className="flex flex-1 gap-1 items-center hover:text-zinc-50 transition duration-200"><p className="self-center" ></p><AiOutlineCaretDown title="Recentes" /></a>


      </div>
      <div className="gap-2 mt-3 flex flex-col flex-nowrap">
          <List type="playlist" url="https://upload.wikimedia.org/wikipedia/pt/8/81/CAPA_CD_NOTHING_BUT_THE_BEAT.jpg" />
          <List type= "author" url="https://upload.wikimedia.org/wikipedia/pt/8/81/CAPA_CD_NOTHING_BUT_THE_BEAT.jpg" />
          <List type= "playlist" url="https://www.musicgrotto.com/wp-content/uploads/2022/05/band-playing-music-illustration-graphic-art.jpg" />
          <List type= "author" url="https://i1.sndcdn.com/artworks-1AzR2MWnfljleefg-e0296w-t500x500.jpg" />
          <List type= "author" url="https://pbs.twimg.com/profile_images/1636879243240939520/D7-iJbGX_400x400.jpg" />
          <List type= "playlist" url="https://cloudfront-us-east-1.images.arcpublishing.com/estadao/EEC4MCXTPRAVLPV2Q2NZCBR5EU.jpg" />
      </div>



    </nav>
  )
}