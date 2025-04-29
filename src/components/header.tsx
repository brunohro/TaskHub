import { useNavigate } from "react-router-dom";
import MenuNav from "./MenuNav";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex bg-transparent max-w-3xl h-24 mx-auto items-center justify-between px-6">
      <div className="flex gap-3 cursor-pointer">
        <img src="/vite.svg" alt="" />
        <h1
          onClick={() => navigate("/")}
          className="text-white text-start font-bold text-2xl py-6"
        >
          TaskHub
        </h1>
      </div>
      <MenuNav />
    </div>
  );
}

export default Header;
