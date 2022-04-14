import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Home, Login, Trash, Archive, Label } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mock" element={<Mockman />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/label" element={<Label />} />
      </Routes>
    </div>
  );
}

export default App;
