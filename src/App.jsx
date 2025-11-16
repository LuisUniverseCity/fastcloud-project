import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Second from './pages/Second'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sec" element={<Second />} />
      </Routes>
    </BrowserRouter>
  );
}