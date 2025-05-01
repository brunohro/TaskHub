import { FormEvent } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Cadastro realizado com sucesso!");
    navigate("/");
  };
  return (
    <div className="bg-zinc-800 min-h-screen text-white px-6 pt-4 pb-4">
      <Header />
      <div className="max-w-md mx-auto bg-zinc-900 items-center my-24 rounded-lg p-8 shadow-2xl shadow-zinc-700">
        <div className="text-white text-2xl font-extrabold text-center">
          PÁGINA DE CADASTRO
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4" action="">
          <div>
            <label
              htmlFor=""
              className="block text-sm font-semibold text-gray-300 mb-2"
            >
              Nome
            </label>
            <input
              placeholder="Nome"
              className="w-full p-2 rounded bg-zinc-700 border border-zinc-600"
            />
          </div>
          <div>
            <label
              typeof="mailton"
              htmlFor=""
              className="block text-sm font-semibold text-gray-300 mb-2"
            >
              E-mail
            </label>
            <input
              placeholder="E-mail"
              className="w-full p-2 rounded bg-zinc-700 border border-zinc-600"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="block text-sm font-semibold text-gray-300 mb-2"
            >
              Login
            </label>
            <input
              placeholder="Login"
              className="w-full p-2 rounded bg-zinc-700 border border-zinc-600"
            />
          </div>

          <div>
            <label
              htmlFor=""
              className="block text-sm font-semibold text-gray-300 mb-2"
            >
              Senha
            </label>
            <input
              placeholder="Senha"
              className="w-full p-2 rounded bg-zinc-700 border border-zinc-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-blue-600 font-semibold py-2 rounded hover:bg-gray-100 transition"
          >
            Entrar
          </button>
          <div className="flex gap-2">
            <p className="text-zinc-400">Não tem uma conta ?</p>
            <a href="/Cadastro"> Cadastre-se aqui</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
