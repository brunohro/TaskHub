import React from "react";
import { useNavigate } from "react-router-dom";

type Task = {
  id: string;
  title: string;
  category: string;
  isCompleted: boolean;
};

type TaskListProps = {
  tasks: Task[];
};

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
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
          <p className="text-center text-gray-400">
            {" "}
            Nenhuma tarefa cadastrada
          </p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white cursor-pointer p-4 rounded-lg shadow-md border-l-4 transition-all hover:scale-[1.02] hover:shadow-lg border-purple-700 flex flex-col gap-2"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-zinc-800">
                  {task.title}
                </h3>
                <span
                  className={`text-sm font-semibold px-2 py-1 rounded-md 
                  ${
                    task.isCompleted
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {task.isCompleted ? "Concluída" : "Pendente"}
                </span>
              </div>

              <p className="text-sm text-zinc-600 italic">
                Categoria: {task.category}
              </p>
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
