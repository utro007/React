import { useNavigate } from "react-router-dom";

const TYPES = ["Tek", "Kolesarjenje", "Plavanje", "Hojo"];

export default function ActivityForm({ onSaved }: { onSaved: () => void }) {
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const body = Object.fromEntries(new FormData(e.currentTarget));

    if (Object.values(body).some(v => !v)) return alert("Izpolni vse!");

    fetch("http://localhost:3000/activities", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).then(r => {
      if (r.ok) { onSaved(); navigate("/"); }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Nova aktivnost</h2>
      <select name="type">{TYPES.map(t => <option key={t}>{t}</option>)}</select>
      <input name="distance" placeholder="Razdalja (npr. 5km)" />
      <input name="duration" placeholder="Trajanje (npr. 30min)" />
      <input name="date" type="date" />
      <textarea name="description" placeholder="Opis aktivnosti" />
      <button type="submit">Shrani</button>
    </form>
  );
}