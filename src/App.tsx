import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/header";
import Task from "./components/Task";
import NewTask from "./pages/newTask";

type status = "Pendente" | "Em andamento" | "Concluída";
type priority = "Baixa" | "Média" | "Alta";
type Category =
  | "Trabalho"
  | "Estudos"
  | "Casa"
  | "Lazer"
  | "Saúde"
  | "Financeiro"
  | "Projetos"
  | "Pessoal"
  | "Compras"
  | "Manutenção"
  | "Eventos"
  | "Viagens"
  | "Organização"
  | "Social"
  | "Tecnologia"
  | "Desenvolvimento Pessoal"
  | "Administração"
  | "Reuniões"
  | "Projetos Criativos"
  | "Marketing"
  | "Outros";

type TaskType = {
  id: string;
  title: string;
  description: string;
  category: Category;
  priority: priority;
  status: status;
};

function App() {
  const [task, setTask] = useState<TaskType[]>(() => {
    const stored = localStorage.getItem("task");
    try {
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  const onAddTaskSubmit = (
    title: string,
    description: string,
    category: Category,
    priority: priority,
    status: status
  ) => {
    const newTask: TaskType = {
      id: uuidv4(),
      title,
      description,
      category,
      priority,
      status,
    };
    setTask((prev) => [...prev, newTask]);
  };

  const onEditTaskSubmit = (
    id: string,
    title: string,
    description: string,
    category: Category,
    priority: priority,
    status: status
  ) => {
    setTask((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, title, description, category, priority, status }
          : t
      )
    );
  };

  const onDeleteTask = (id: string) => {
    setTask((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-zinc-800 w-screen h-screen">
              <Header />
              <Task tasks={task} onDelete={onDeleteTask} />
            </div>
          }
        />
        <Route
          path="/newTask"
          element={
            <NewTask
              tasks={task}
              onAddTaskSubmit={onAddTaskSubmit}
              onEditTaskSubmit={onEditTaskSubmit}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <NewTask
              tasks={task}
              onAddTaskSubmit={onAddTaskSubmit}
              onEditTaskSubmit={onEditTaskSubmit}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
