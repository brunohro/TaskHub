import { useEffect, useState } from "react";
import "./App.css";
//import { v4 as uuidv4 } from "uuid";
import Header from "./components/header";
import Task from "./components/Task";

type Task = {
  id: string;
  title: string;
  category: string;
  isCompleted: boolean;
};

function App() {
  const [task] = useState<Task[]>(() => {
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

  // const onAddTaskSubmit = (
  //   title: string,
  //   category: string,
  //   isCompleted: boolean
  // ) => {
  //   const newTask = {
  //     id: uuidv4(),
  //     title,
  //     category,
  //     isCompleted,
  //   };
  //   setTask((prevTasks) => [...prevTasks, newTask]);
  // };
  return (
    <div className="bg-zinc-800 w-screen h-screen">
      <Header />
      <Task tasks={task} />
    </div>
  );
}

export default App;
