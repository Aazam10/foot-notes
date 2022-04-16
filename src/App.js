import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Home, Login, Trash, Archive, Label } from "./pages";
import { Navbar, Sidebar } from "./components";

import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <Navbar toggle={toggle} setToggle={setToggle} />
      <Sidebar toggle={toggle} setToggle={setToggle} />
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
