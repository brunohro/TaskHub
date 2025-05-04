import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";
import { Category, Priority, Status } from "../App";
import { motion } from "framer-motion";

export type Task = {
  id: string;
  title: string;
  description: string;
  category: Category;
  priority: Priority;
  status: Status;
};

type TaskListProps = {
  tasks: Task[];
  onDelete: (id: string) => void;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("Todas");
  const [statusFilter, setStatusFilter] = useState("Todos");

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      categoryFilter === "Todas" || task.category === categoryFilter;

    const matchesStatus =
      statusFilter === "Todos" || task.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="p-6 mt-8">
      <motion.div
        className="min-h-screen text-white p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
      >
        <div className="text-center mb-8">
          <div className="text-white text-2xl font-extrabold text-center mb-4">
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              🏋️ MINHAS TAREFAS
            </motion.h1>
          </div>
          <div className="w-16 h-1 bg-purple-400 mx-auto rounded-full" />
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 mb-6 justify-between">
            <input
              type="text"
              placeholder="Pesquisar por título..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-1/3 p-2 rounded bg-zinc-700 border border-zinc-600 text-white"
            />

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full sm:w-1/3 p-2 rounded bg-zinc-700 border border-zinc-600 text-white"
            >
              <option value="Todas">Todas as Categorias</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Estudos">Estudos</option>
              <option value="Casa">Casa</option>
              <option value="Lazer">Lazer</option>
              <option value="Saúde">Saúde</option>
              <option value="Financeiro">Financeiro</option>
              <option value="Projetos">Projetos</option>
              <option value="Pessoal">Pessoal</option>
              <option value="Compras">Compras</option>
              <option value="Manutenção">Manutenção</option>
              <option value="Eventos">Eventos</option>
              <option value="Viagens">Viagens</option>
              <option value="Organização">Organização</option>
              <option value="Social">Social</option>
              <option value="Tecnologia">Tecnologia</option>
              <option value="Desenvolvimento Pessoal">
                Desenvolvimento Pessoal
              </option>
              <option value="Administração">Administração</option>
              <option value="Reuniões">Reuniões</option>
              <option value="Projetos Criativos">Projetos Criativos</option>
              <option value="Marketing">Marketing</option>
              <option value="Outros">Outros</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full sm:w-1/3 p-2 rounded bg-zinc-700 border border-zinc-600 text-white"
            >
              <option value="Todos">Todos os Status</option>
              <option value="Pendente">Pendente</option>
              <option value="Em andamento">Em andamento</option>
              <option value="Concluída">Concluída</option>
            </select>
          </div>
        </motion.div>
        <motion.div
          className="text-2xl font-semibold mb-2"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <div className="max-w-md flex flex-col gap-4 mx-auto">
            {filteredTasks.length === 0 ? (
              <p className="text-center text-gray-400">
                Nenhuma tarefa encontrada
              </p>
            ) : (
              filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-white p-4 rounded-lg shadow-md border-l-4 transition-all hover:scale-[1.02] hover:shadow-lg border-purple-700 flex flex-col gap-2"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-zinc-800">
                      {task.title}
                    </h3>
                    <span
                      className={`text-sm font-semibold px-2 py-1 rounded-md ${
                        task.status === "Concluída"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {task.status}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-600 italic">
                    Categoria: {task.category}
                  </p>

                  <div className="flex gap-2 justify-end mt-2">
                    <button
                      onClick={() => navigate(`/edit/${task.id}`)}
                      className="text-blue-600 hover:text-blue-800 transition"
                      title="Editar"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => onDelete(task.id)}
                      className="text-red-600 hover:text-red-800 transition"
                      title="Excluir"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))
            )}
            <motion.div
              className="text-2xl font-semibold mb-2"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <div className="flex justify-end">
                <button
                  onClick={() => navigate("/newTask")}
                  className="bg-white w-24 text-purple-700 font-semibold text-sm px-auto py-2 rounded-md border border-white hover:bg-gray-100 transition"
                >
                  Nova tarefa
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TaskList;
