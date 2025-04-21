// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
// import { uuidv4 } from "uuid";
import Header from "./components/header";

// type Task = {
//   id: uuidv4;
//   title: string;
//   category: string;
//   isCompleted: boolean;
// };

function App() {
  const navigate = useNavigate();
  // const [task, setTask] = useState<Task[]>([
  //   {
  //     id: uuidv4,
  //     title: "Estudar React",
  //     category: "Estudos",
  //     isCompleted: false,
  //   },
  //   {
  //     id: uuidv4,
  //     title: "Estudar React2",
  //     category: "Estudos",
  //     isCompleted: false,
  //   },
  //   {
  //     id: uuidv4,
  //     title: "Estudar React3",
  //     category: "Estudos",
  //     isCompleted: false,
  //   },
  // ]);
  return (
    <div className="bg-zinc-800 w-screen h-screen">
      <Header />
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate("/newTask")}
          className="bg-white w-24 text-blue-600 font-semibold text-sm px-4 py-1 rounded-md border border-white hover:bg-gray-100 transition"
        >
          Minhas tarefas
        </button>
      </div>
    </div>
  );
}

export default App;
