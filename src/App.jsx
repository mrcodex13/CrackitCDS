import { Routes, Route } from "react-router-dom";
import "./style/App.css";
import Home from "./pages/Home";
import English from "./pages/english";
import CustomCursor from "./components/layout/CustomCursor/CustomCursor";

function App() {
  return (
    <>
      {/* Global emerald glow cursor — desktop only */}
      <CustomCursor />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/english" element={<English />} />
      </Routes>
    </>
  );
}

export default App;