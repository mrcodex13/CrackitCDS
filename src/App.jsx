import { Routes, Route } from "react-router-dom";
import "./style/App.css";
import Home from "./pages/Home";
import English from "./pages/english";
import General_Studies from "./pages/GK";
import Mathematics from "./pages/Mathematics";
import CustomCursor from "./components/layout/CustomCursor/CustomCursor";
import About from "./pages/About";

function App() {
  return (
    <>
      {/* Global emerald glow cursor — desktop only */}
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/english" element={<English />} />
        <Route path="/General_Studies" element={<General_Studies/>} />
        <Route path="/mathematics" element={<Mathematics/>} />
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;