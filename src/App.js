import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { FaTags } from "react-icons/fa";
import { Home, Login, Trash } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mock" element={<Mockman />} />
        <Route path="/trash" element={<Trash />} />
      </Routes>
    </div>
  );
}

export default App;
