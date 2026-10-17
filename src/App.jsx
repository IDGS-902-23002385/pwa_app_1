import { Routes, Route } from "react-router-dom";

import PokemonApp from "./pages/PokemonApp";
import LanguageApp from "./pages/LanguageApp";
import RickAndMortyApp from "./pages/RickAndMortyApp";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<PokemonApp />} />
        <Route path="/lenguajes" element={<LanguageApp/>} />
        <Route path="/rm" element={<RickAndMortyApp/>} />
      </Routes>
    </div>
  );
}

export default App;