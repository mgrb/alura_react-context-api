import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrinho from "./pages/Carrinho";
import Home from "./pages/Home";
import PaginaErro from "./pages/PaginaErro";

import { CarrinhoContext } from "@/context/CarrinhoContext";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CarrinhoContext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="*" element={<PaginaErro />} />
        </Routes>
      </CarrinhoContext>
    </BrowserRouter>
  );
}

export default App;
