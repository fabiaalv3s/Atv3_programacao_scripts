import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "../components/Menu";
import { Megasena, Quina, Timemania } from "../pages";
import Erro from "../pages/Erro";

export const LoteriaRoutes = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/timemania" element={<Timemania />} />
        <Route path="/megasena" element={<Megasena />} />
        <Route path="/quina" element={<Quina />} />
        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
};