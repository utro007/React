import { Contact } from "../types";

export default function ContactList({ contacts, onAddClick }: { contacts: Contact[]; onAddClick: () => void }) {
  return (
    <div>
      <button onClick={onAddClick}>Dodaj nov stik</button>
      {contacts.map((c) => (
        <div key={c.id}>
          <h3>{c.name}</h3>
          <p>Tel: {c.phone}</p>
        </div>
      ))}
    </div>
  );
}