import './App.css';
import CardsUI from './component/CardsUI';
import Dashboard from './component/Dashboard';
import { Route, Routes } from "react-router-dom";
import Start from './component/Start';

function App() {
  return (
    <div className="App">
       <Routes>
       <Route path="/" element={<Start />} />
       <Route path="/PSM-Rank" element={<CardsUI />} />
       <Route path="/PSM-Dashboard" element={<Dashboard />} />
       </Routes>
    </div>
  );
}

export default App;
