import { LogIn, Menu, X } from "lucide-react";
import { useState } from "react";

function MenuNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="hidden md:flex gap-4">
        <div className="text-white text-start font-light items-center text-md py-7">
          <a href="#">Tarefas</a>
        </div>
        <div className="text-white text-start font-light items-center text-md py-7">
          <a href="#">Histórico</a>
        </div>
        <div className="text-white text-start font-light items-center text-md py-7">
          <a href="/Sobre">Sobre</a>
        </div>
      </div>
      <div className="hidden md:flex gap-4">
        <a
          href="/Login"
          className="bg-white text-blue-600 font-semibold text-sm px-4 py-1 rounded-md border border-white hover:bg-gray-100 transition"
        >
          Entrar
        </a>
        <a
          href="/Cadastro"
          className="bg-transparent text-white font-semibold text-sm px-8 py-1 rounded-md border border-white hover:bg-white hover:text-blue-600 transition"
        >
          Cadastrar
        </a>
      </div>
      <div className="flex md:hidden">
        <a
          href="/Login"
          className="flex items-center gap-2 px-8 py-1 text-white hover:text-gray-300"
        >
          <LogIn size={20} />
        </a>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed top-0 right-0 w-64 bg-zinc-900 text-white shadow-lg flex flex-col justify-between h-screen">
          <div className="p-6 text-2xl font-bold border-b border-zinc-700">
            TaskHub
          </div>
          <nav className="flex-1 px-4 py-6 space-y-4 ">
            <a
              href="#"
              className="block text-md text-white text-md font-light hover:text-blue-400 transition "
            >
              Tarefas
            </a>
            <a
              href="#"
              className="block text-md text-white text-md font-light hover:text-blue-400 transition "
            >
              Histórico
            </a>
            <a
              href="/Sobre"
              className="block text-md text-white text-md font-light hover:text-blue-400 transition "
            >
              Sobre
            </a>
            <div className="p-4 border-t border-zinc-700">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full text-left text-red-400 hover:text-red-600 transition"
              >
                Sair
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

export default MenuNav;
