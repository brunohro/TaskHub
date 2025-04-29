import { motion } from "framer-motion";
import Header from "../components/header";

function Sobre() {
  return (
    <div className="bg-zinc-800 min-h-screen text-white px-6 pt-4">
      <Header />
      <div className="max-w-md mx-auto">
        <motion.div
          className="min-h-screen text-white p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h1
              className="text-4xl font-bold mb-4"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Sobre o TaskHub
            </motion.h1>

            <motion.p
              className="text-lg mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              O <span className="font-semibold">TaskHub</span> é uma plataforma
              moderna de gerenciamento de tarefas, criada para ajudar equipes e
              indivíduos a organizarem seu trabalho de forma eficiente e
              colaborativa.
            </motion.p>

            <motion.h2
              className="text-2xl font-semibold mb-2"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              Nosso objetivo
            </motion.h2>

            <motion.p
              className="mb-4"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              Nosso foco é fornecer uma interface intuitiva com recursos
              poderosos como atribuição de tarefas, controle de prazos,
              notificações e muito mais.
            </motion.p>

            <motion.h2
              className="text-2xl font-semibold mb-2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              Tecnologias utilizadas
            </motion.h2>

            <motion.ul
              className="list-disc list-inside space-y-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              <li>React + TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Vite</li>
              <li>Node.js (para backend, se aplicável)</li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Sobre;
