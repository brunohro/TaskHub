import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";

type Status = "Pendente" | "Em andamento" | "Concluída";
type Priority = "Baixa" | "Média" | "Alta";

type NewTaskProps = {
  onAddTaskSubmit: (
    title: string,
    description: string,
    category: string,
    priority: Priority,
    status: Status
  ) => void;
};

export default function NewTask({ onAddTaskSubmit }: NewTaskProps) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState<Priority>("Média");
  const [status, setStatus] = useState<Status>("Pendente");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !description.trim() || !category.trim()) {
      alert("Preencha todos os campos.");
      return;
    }

    onAddTaskSubmit(title, description, category, priority, status);

    setTitle("");
    setDescription("");
    setCategory("");
    setPriority("Média");
    setStatus("Pendente");

    navigate("/"); // volta para a home
  };

  return (
    <div className="bg-zinc-800 min-h-screen text-white px-6 pt-4">
      <Header />
      <h2 className="text-2xl font-bold text-center text-blue-400 mb-6">
        Nova Tarefa
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
          Adicionar Tarefa
        </button>
      </form>
    </div>
  );
}
