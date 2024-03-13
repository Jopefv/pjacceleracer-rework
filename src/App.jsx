import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Home  from './components/home/home'
import Personagens from './components/personagens/Personagens';
import Carros from './components/veiculos/Carros';
import Reino from './components/reino/Reino';
import Accelechargers from './components/accelechargers/Accelechargers';
import Mod from './components/mods/Mods';
import Hazard from './components/hazard/Hazard';


function App() {
  
  return (
    <>
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personagens" element={<Personagens />} />
          <Route path="/veiculos" element={<Carros/>} />
          <Route path="/reinos" element={<Reino/>} />
          <Route path="/mods" element={<Mod/>} />
          <Route path="/accelechargers" element={<Accelechargers/>} />
          <Route path="/monstros" element={<Hazard/>} />

        </Routes>
      </Router>
    </>
  )
}

export default App
