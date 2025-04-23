import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex bg-transparent max-w-3xl h-24 mx-auto items-center justify-between px-6">
      <div className="flex gap-3 cursor-pointer">
        <img src="/vite.svg" alt="" />
        <h1
          onClick={() => navigate("/")}
          className="text-white text-start font-bold text-2xl py-6"
        >
          TaskHub
        </h1>
      </div>
      <div className="flex gap-4">
        <button className="bg-white text-blue-600 font-semibold text-sm px-4 py-1 rounded-md border border-white hover:bg-gray-100 transition">
          Entrar
        </button>
        <button className="bg-transparent text-white font-semibold text-sm px-8 py-1 rounded-md border border-white hover:bg-white hover:text-blue-600 transition">
          Cadastrar
        </button>
      </div>
    </div>
  );
}

export default Header;
