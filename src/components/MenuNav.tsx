import { LogIn, Menu } from "lucide-react";

function MenuNav() {
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
        <button className="bg-white text-blue-600 font-semibold text-sm px-4 py-1 rounded-md border border-white hover:bg-gray-100 transition">
          Entrar
        </button>
        <button className="bg-transparent text-white font-semibold text-sm px-8 py-1 rounded-md border border-white hover:bg-white hover:text-blue-600 transition">
          Cadastrar
        </button>
      </div>
      <div className="flex md:hidden">
        <button className="flex items-center gap-2 px-8 py-1 text-white hover:text-gray-300">
          <LogIn size={20} />
        </button>
        <button className="text-white p-2">
          <Menu size={24} />
        </button>
      </div>
    </>
  );
}

export default MenuNav;
