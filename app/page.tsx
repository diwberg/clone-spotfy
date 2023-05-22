
import { Nav } from "./components/Nav";
export default function Home() {
  return (
  <div className="h-screen flex flex-col">
    <div className="flex flex-1">

      <aside className="w-72 bg-zinc-950 p-6" >

      <Nav />
      <Nav library={true} />

      </aside>

      <main className="flex-1 p-6"></main>
    </div>
    <footer className="bg-zinc-800 border-t border-zinc-600 p-6">
      FOOTER
      </footer>
  </div>
  )
}
