import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/HomePage/Homepage";
import "./App.css";

function App() {
  return (
    <div id="page">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
