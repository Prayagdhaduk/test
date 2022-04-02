import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Display1 from "./components/Display1";
import Display2 from "./components/Display2";
import Display3 from "./components/Display3";
import Display4 from "./components/Display4";

function App() {
  return (
    <>
    <Router>
      <Sidebar />
        <Routes>
        <Route path="/" element={<Display1 />}/>
        <Route path="Display2" element={<Display2 />}/>
        <Route path="Display3" element={<Display3 />}/>
        <Route path="Display4" element={<Display4 />}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
