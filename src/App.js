import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { FaTags } from "react-icons/fa";

function App() {
  return (
    <div>
      hi <FaTags />
      <Routes>
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
