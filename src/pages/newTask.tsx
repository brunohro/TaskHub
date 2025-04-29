import { useEffect, useState, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/header";

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

type NewTaskProps = {
  onAddTaskSubmit: (
    title: string,
    description: string,
    category: string,
    priority: Priority,
    status: Status
  ) => void;
  onEditTaskSubmit?: (
    id: string,
    title: string,
    description: string,
    category: string,
    priority: Priority,
    status: Status
  ) => void;
  tasks?: Task[];
};

export default function NewTask({
  onAddTaskSubmit,
  onEditTaskSubmit,
  tasks,
}: NewTaskProps) {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const editingTask = tasks?.find((t) => t.id === id);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState<Priority>("Média");
  const [status, setStatus] = useState<Status>("Pendente");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setCategory(editingTask.category);
      setPriority(editingTask.priority);
      setStatus(editingTask.status);
    }
  }, [editingTask]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !description.trim() || !category.trim()) {
      alert("Preencha todos os campos.");
      return;
    }

    if (editingTask && onEditTaskSubmit) {
      onEditTaskSubmit(
        editingTask.id,
        title,
        description,
        category,
        priority,
        status
      );
    } else {
      onAddTaskSubmit(title, description, category, priority, status);
    }

    navigate("/");
  };

  return (
    <div className="bg-zinc-800 min-h-screen text-white px-6 pt-4">
      <Header />
      <h2 className="text-2xl font-bold text-center text-blue-400 mb-6">
        {editingTask ? "Editar Tarefa" : "Nova Tarefa"}
      </h2>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
          className="w-full p-2 rounded bg-zinc-700 border border-zinc-600"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição"
          className="w-full p-2 rounded bg-zinc-700 border border-zinc-600"
        />
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Categoria"
          className="w-full p-2 rounded bg-zinc-700 border border-zinc-600"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as Priority)}
          className="w-full p-2 rounded bg-zinc-700 border border-zinc-600"
        >
          <option value="Baixa">Baixa</option>
          <option value="Média">Média</option>
          <option value="Alta">Alta</option>
        </select>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as Status)}
          className="w-full p-2 rounded bg-zinc-700 border border-zinc-600"
        >
          <option value="Pendente">Pendente</option>
          <option value="Em andamento">Em andamento</option>
          <option value="Concluída">Concluída</option>
        </select>
        <button
          type="submit"
          className="w-full bg-white text-blue-600 font-semibold py-2 rounded hover:bg-gray-100 transition"
        >
          {editingTask ? "Salvar Alterações" : "Adicionar Tarefa"}
        </button>
      </form>
    </div>
  );
}
