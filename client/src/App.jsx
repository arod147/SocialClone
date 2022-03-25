import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/HomePage/Homepage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
