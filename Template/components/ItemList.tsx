import { Link } from "react-router-dom";
import { Item } from "../types";

export default function ItemList({ items }: { items: Item[] }) {
  return (
    <div>
      {/* SPREMENI: Naslov strani */}
      <h2>Seznam elementov</h2>
      
      {items.map(item => (
        <div key={item.id} style={{ margin: "10px 0" }}>
          <Link to={`/item/${item.id}`}>
            {/* SPREMENI: Izpiši polja, ki jih zahtevajo na glavni strani (npr. item.title) */}
            <strong>{item.field1}</strong> - {item.field2}
          </Link>
        </div>
      ))}
    </div>
  );
}