import Header from "../components/header";
import "../App.css";
import { useNavigate } from "react-router-dom";

function NewTask() {
  const navigate = useNavigate();
  return (
    <div className="bg-zinc-800 w-screen h-screen">
      <Header />
      <div className="max-w-xl flex flex-col gap-6 justify-center mx-auto">
        <div className="max-w-lg text-center py-6 px-4 mx-auto rounded-md  bg-slate-300 mt-32">
          <p>Essa é uma tarefa teste, criada para testar o template</p>
        </div>
        <div className="flex justify-end mt-8">
          <button
            onClick={() => navigate("/")}
            className="bg-white w-24 text-blue-600 font-semibold text-sm px-4 py-1 rounded-md border border-white hover:bg-gray-100 transition"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewTask;
