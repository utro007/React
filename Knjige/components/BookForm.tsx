const GENRES = ["Roman", "Dystopija", "Strokovna", "Fantazija", "Novela"];

export default function BookForm({ onSaved, onCancel }: { onSaved: () => void; onCancel: () => void }) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const body = Object.fromEntries(new FormData(e.currentTarget));

    if (Object.values(body).some(v => !v)) return alert("Izpolni vsa polja!");

    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).then(r => r.ok ? onSaved() : alert("Napaka!"));
  };

  return (
    <div>
      <h2>Dodaj knjigo</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Naslov" />
        <input name="author" placeholder="Avtor" />
        <select name="genre">{GENRES.map(g => <option key={g}>{g}</option>)}</select>
        <input name="shortDescription" placeholder="Kratek opis" />
        <textarea name="description" placeholder="Opis" />
        <div>
          <button type="button" onClick={onCancel}>Prekliči</button>
          <button type="submit">Shrani</button>
        </div>
      </form>
    </div>
  );
}