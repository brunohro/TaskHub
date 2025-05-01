import { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Login() {
  const [login, setLogin] = useState("");
  const [senha, SetSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (login === storedUser.login && senha === storedUser.senha) {
      alert("Login bem-sucedido!");
      navigate("/");
    } else {
      alert("Login ou senha inválidos!");
    }
  };
  return (
    <div className="bg-zinc-800 min-h-screen text-white px-6 pt-4">
      <Header />
      <div className="max-w-md mx-auto bg-zinc-900 items-center my-24 rounded-lg p-8 shadow-2xl shadow-zinc-700">
        <div className="text-white text-2xl font-extrabold text-center mb-4">
          PÁGINA DE LOGIN
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleLogin} action="">
          <div>
            <label
              htmlFor=""
              className="block text-sm font-semibold text-gray-300 mb-2"
            >
              Login
            </label>
            <input
              value={login}
              onChange={(e) => setLogin(e.target.value)}
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
              type="password"
              value={senha}
              onChange={(e) => SetSenha(e.target.value)}
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

export default Login;
