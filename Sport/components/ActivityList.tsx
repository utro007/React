import { Link } from "react-router-dom";
import { Activity } from "../types";

export default function ActivityList({ activities }: { activities: Activity[] }) {
  return (
    <div>
      <h2>Športne aktivnosti</h2>
      {activities.map(a => (
        <div key={a.id} style={{ margin: "10px 0" }}>
          <Link to={`/activity/${a.id}`}>
            <strong>{a.type}</strong> - {a.date}
          </Link>
        </div>
      ))}
    </div>
  );
}