import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Activity } from "./types";
import ActivityList from "./components/ActivityList";
import ActivityDetails from "./components/ActivityDetails";
import ActivityForm from "./components/ActivityForm";

export default function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const load = () => { fetch("http://localhost:3000/activities").then(r => r.json()).then(setActivities); };
  
  useEffect(load, []);

  return (
    <BrowserRouter>
      <nav><Link to="/">Domov</Link> | <Link to="/add">Dodaj aktivnost</Link></nav>
      <Routes>
        <Route path="/" element={<ActivityList activities={activities} />} />
        <Route path="/activity/:id" element={<ActivityDetails activities={activities} />} />
        <Route path="/add" element={<ActivityForm onSaved={load} />} />
      </Routes>
    </BrowserRouter>
  );
}