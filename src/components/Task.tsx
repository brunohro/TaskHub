import React from "react";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";

type Status = "Pendente" | "Em andamento" | "Concluída";
type Priority = "Baixa" | "Média" | "Alta";

type Task = {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: Priority;
  status: Status;
};

type TaskListProps = {
  tasks: Task[];
  onDelete: (id: string) => void;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="p-6 mt-8 mb-8">
      <div className="text-center mb-8">
        <div className="text-white text-2xl font-extrabold text-center mb-6">
          🏋️ MINHAS TAREFAS
        </div>
        <div className="w-16 h-1 bg-purple-400 mx-auto mt-2 rounded-full animate-pulse" />
      </div>

      <div className="max-w-md flex flex-col gap-4 mx-auto">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-400">Nenhuma tarefa cadastrada</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white p-4 rounded-lg shadow-md border-l-4 transition-all hover:scale-[1.02] hover:shadow-lg border-purple-700 flex flex-col gap-2"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-zinc-800">
                  {task.title}
                </h3>
                <span
                  className={`text-sm font-semibold px-2 py-1 rounded-md 
    ${
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

        <div className="flex justify-end">
          <button
            onClick={() => navigate("/newTask")}
            className="bg-white w-24 text-purple-700 font-semibold text-sm px-auto py-2 rounded-md border border-white hover:bg-gray-100 transition"
          >
            Nova tarefa
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
