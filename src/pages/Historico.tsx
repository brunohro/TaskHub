import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { motion } from "framer-motion";

function Historico() {
  const navigate = useNavigate();
  return (
    <div className="bg-zinc-800 min-h-screen text-white px-6 pt-4">
      <Header />
      <motion.div
        className="min-h-screen text-white p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
      >
        <div className="text-center max-w-md mx-auto rounded-lg py-10">
          <h2>Essa é a página de Histórico</h2>
          <p>Ainda está sendo produzida!</p>
          <p>...</p>
          <div>
            <button
              onClick={() => navigate("/")}
              className="py-4 text-left text-red-400 hover:text-red-600 transition"
            >
              Voltar para tela inicial
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Historico;
