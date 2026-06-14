import { useParams, Link } from "react-router-dom";
import { Item } from "../types";

export default function ItemDetails({ items }: { items: Item[] }) {
  const { id } = useParams();
  const item = items.find(i => String(i.id) === id);

  if (!item) return <p>Ni najdeno!</p>;

  return (
    <div>
      {/* SPREMENI: Izpiši vse podrobnosti elementa, kot zahteva naloga */}
      <h2>{item.field1}</h2>
      <p>Podatek 2: {item.field2} | Podatek 3: {item.field3}</p>
      
      <Link to="/">Nazaj na seznam</Link>
    </div>
  );
}