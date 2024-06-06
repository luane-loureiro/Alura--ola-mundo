import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobreMim/Index";

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim"  element={<SobreMim/>} />
        <Route path="*" element={<div>Pagina não encontrada</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
