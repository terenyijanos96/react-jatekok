import ReactDOM from "react-dom/client";
import Layout from "./Layout";

import './App.css';
import TicTacToe from './pages/TicTacToe';
import LightOn from './pages/LightOn';
import NoPage from './pages/NoPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TicTacToe />} />
          <Route path="lighton" element={<LightOn />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
