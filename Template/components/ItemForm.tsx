import { useNavigate } from "react-router-dom";

// SPREMENI: Če naloga zahteva padajoč seznam (dropdown), tukaj definiraj opcije
const OPTIONS = ["Opcija 1", "Opcija 2", "Opcija 3"];

export default function ItemForm({ onSaved }: { onSaved: () => void }) {
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const body = Object.fromEntries(new FormData(e.currentTarget));

    if (Object.values(body).some(v => !v)) return alert("Izpolni vsa polja!");

    // SPREMENI: Vpiši isti URL za POST zahtevo kot v App.tsx
    fetch("http://localhost:3000/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).then(r => {
      if (r.ok) { onSaved(); navigate("/"); }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* SPREMENI: Naslov obrazca */}
      <h2>Dodaj</h2>
      
      {/* SPREMENI: Tukaj nameči inpute. 
          Nujno pazi, da se 'name' ujema s tistim v types.ts! */}
      <input name="field1" placeholder="Vnos 1" />
      <input name="field2" placeholder="Vnos 2" />
      <textarea name="field3" placeholder="Vnos 3" />
      
      {/* SPREMENI: Če potrebuješ padajoč seznam, odkomentiraj spodnjo vrstico (izbriši slashe) */}
      {/* <select name="field1">{OPTIONS.map(o => <option key={o}>{o}</option>)}</select> */}

      <button type="submit">Shrani</button>
    </form>
  );
}