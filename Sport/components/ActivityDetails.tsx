import { useParams, Link } from "react-router-dom";
import { Activity } from "../types";

export default function ActivityDetails({ activities }: { activities: Activity[] }) {
  const { id } = useParams();
  const act = activities.find(a => String(a.id) === id);

  if (!act) return <p>Aktivnost ni najdena.</p>;

  return (
    <div>
      <h2>{act.type} ({act.date})</h2>
      <p>Razdalja: {act.distance} | Trajanje: {act.duration}</p>
      <p>Opis: {act.description}</p>
      <Link to="/">Nazaj</Link>
    </div>
  );
}