import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "./components/Task";
import NewTask from "./pages/newTask";
import Sobre from "./pages/Sobre";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Header from "./components/Header";
import Tarefas from "./pages/Tarefas";

export type Status = "Pendente" | "Em andamento" | "Concluída";
export type Priority = "Baixa" | "Média" | "Alta";
export type Category =
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

export type TaskType = {
  id: string;
  title: string;
  description: string;
  category: Category;
  priority: Priority;
  status: Status;
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

  useEffect(() => {
    //  armazenando um usuário padrão
    const userExists = localStorage.getItem("user");
    if (!userExists) {
      localStorage.setItem(
        "user",
        JSON.stringify({ login: "admin", senha: "1234" })
      );
    }
  }, []);

  const onAddTaskSubmit = (
    title: string,
    description: string,
    category: Category,
    priority: Priority,
    status: Status
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
    priority: Priority,
    status: Status
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
            <div className="bg-zinc-800 w-screen min-h-screen pb-0 mb-0">
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
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Tarefas" element={<Tarefas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
