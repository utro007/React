import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Item } from "./types";
import ItemList from "./components/ItemList";
import ItemDetails from "./components/ItemDetails";
import ItemForm from "./components/ItemForm";

export default function App() {
  const [spremeni, setSpremeni] = useState<Item[]>([]);
  
  const load = () => { 
    // SPREMENI vse kje je Item
    fetch("http://localhost:3000/spremeni").then(r => r.json()).then(setSpremeni); 
  };
  
  useEffect(load, []);

  return (
    <BrowserRouter>
      {/* SPREMENI: Tukaj lahko spremeniš izpise v navigaciji, če želiš */}
      <nav>
        <Link to="/">Domov</Link> | <Link to="/add">Dodaj novo</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ItemList spremeni={spremeni} />} />
        <Route path="/item/:id" element={<ItemDetails spremeni={spremeni} />} />
        <Route path="/add" element={<ItemForm onSaved={load} />} />
      </Routes>
    </BrowserRouter>
  );
}