import { useEffect, useState, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Task } from "../components/Task";
import { Category, Priority, Status, Semana } from "../App";
import Header from "../components/Header";

type NewTaskProps = {
  onAddTaskSubmit: (
    title: string,
    description: string,
    category: Category,
    priority: Priority,
    status: Status,
    semana: Semana
  ) => void;

  onEditTaskSubmit?: (
    id: string,
    title: string,
    description: string,
    category: Category,
    priority: Priority,
    status: Status,
    semana: Semana
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
  const [category, setCategory] = useState<Category>("Outros");
  const [priority, setPriority] = useState<Priority>("Média");
  const [status, setStatus] = useState<Status>("Pendente");
  const [semana, setSemana] = useState<Semana>("Segunda");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setCategory(editingTask.category);
      setPriority(editingTask.priority);
      setStatus(editingTask.status);
      setSemana(editingTask.semana);
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
        status,
        semana
      );
    } else {
      onAddTaskSubmit(title, description, category, priority, status, semana);
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
        <div>
          <div>
            <label
              htmlFor=""
              className="block text-sm font-semibold text-gray-300 mb-2"
            >
              Dia da Semana
            </label>
            <select
              value={semana}
              onChange={(e) => setSemana(e.target.value as Semana)}
              className="w-full p-2 rounded bg-zinc-700 border border-zinc-600"
            >
              <option value="Domingo">Domingo</option>
              <option value="Segunda">Segunda</option>
              <option value="Terça">Terça</option>
              <option value="Quarta">Quarta</option>
              <option value="Quinta">Quinta</option>
              <option value="Sexta">Sexta</option>
              <option value="Sábado">Sábado</option>
            </select>
          </div>
          <label
            htmlFor=""
            className="block text-sm font-semibold text-gray-300 mb-2"
          >
            Título
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título"
            className="w-full p-2 rounded bg-zinc-700 border border-zinc-600"
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="block text-sm font-semibold text-gray-300 mb-2"
          >
            Descrição
          </label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição"
            className="w-full p-2 rounded bg-zinc-700 border border-zinc-600"
          />
        </div>
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-semibold text-gray-300 mb-2"
          >
            Categoria
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
            className="w-full p-2 rounded bg-zinc-700 border border-zinc-600"
          >
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
        </div>

        <div>
          <label
            htmlFor=""
            className="block text-sm font-semibold text-gray-300 mb-2"
          >
            Prioridade
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
            className="w-full p-2 rounded bg-zinc-700 border border-zinc-600"
          >
            <option value="Baixa">Baixa</option>
            <option value="Média">Média</option>
            <option value="Alta">Alta</option>
          </select>
        </div>
        <div>
          <label
            htmlFor=""
            className="block text-sm font-semibold text-gray-300 mb-2"
          >
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as Status)}
            className="w-full p-2 rounded bg-zinc-700 border border-zinc-600"
          >
            <option value="Pendente">Pendente</option>
            <option value="Em andamento">Em andamento</option>
            <option value="Concluída">Concluída</option>
          </select>
        </div>
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
