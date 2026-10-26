import { Routes, Route, NavLink } from "react-router-dom";

import PokemonApp from "./pages/PokemonApp";
import LanguageApp from "./pages/LanguageApp";
import RickAndMortyApp from "./pages/RickAndMortyApp";
import Ejemplo1 from "./pages/Ejemplo1";
import Ejemplo2 from "./pages/Ejemplo2";
import Ejemplo3 from "./pages/Ejemplo3";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/ejemplo1" element={<Ejemplo1 />} />
        <Route path="/ejemplo2" element={<Ejemplo2/>} />
        <Route path="/ejemplo3" element={<Ejemplo3/>} />
        <Route path="/" element={<PokemonApp />} />
        <Route path="/lenguajes" element={<LanguageApp/>} />
        <Route path="/rm" element={<RickAndMortyApp/>} />
      </Routes>
      <nav>
        <NavLink to="/ejemplo1"> Ejemplo1</NavLink>
        <NavLink to="/ejemplo2"> Ejemplo2</NavLink>
        <NavLink to="/ejemplo3"> Ejemplo3</NavLink>
      </nav>
    </div>
  );
}

export default App;