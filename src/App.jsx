import { Routes, Route } from "react-router-dom";

import PokemonApp from "./pages/PokemonApp";
import LanguageApp from "./pages/LanguageApp";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<PokemonApp />} />
        <Route path="/lenguajes" element={<LanguageApp/>} />
      </Routes>
    </div>
  );
}

export default App;