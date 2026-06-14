import { useState, useEffect } from "react";
import { Book } from "./types";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import BookForm from "./components/BookForm";

export default function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [view, setView] = useState<"list" | "details" | "form">("list");
  const [selected, setSelected] = useState<Book | null>(null);

  const load = () => {
    fetch("http://localhost:3000/books").then(r => r.json()).then(setBooks);
  };

  useEffect(load, []);

  return (
    <div>
      <h1>Knjižna polica</h1>

      {view === "list" && (
        <BookList books={books} onAddClick={() => setView("form")} onSelectBook={(b) => { setSelected(b); setView("details"); }} />
      )}

      {view === "details" && selected && (
        <BookDetails book={selected} onBack={() => setView("list")} />
      )}

      {view === "form" && (
        <BookForm onCancel={() => setView("list")} onSaved={() => { load(); setView("list"); }} />
      )}
    </div>
  );
}