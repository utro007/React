import { useState, useEffect } from "react";
import { Contact } from "./types";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";

export default function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [view, setView] = useState<"list" | "form">("list");

  const load = () => {
    fetch("http://localhost:3000/contacts").then(r => r.json()).then(setContacts);
  };

  useEffect(load, []);

  return (
    <div>
      <h1>Seznam stikov</h1>
      {view === "list" ? (
        <ContactList contacts={contacts} onAddClick={() => setView("form")} />
      ) : (
        <ContactForm onCancel={() => setView("list")} onSaved={() => { load(); setView("list"); }} />
      )}
    </div>
  );
}