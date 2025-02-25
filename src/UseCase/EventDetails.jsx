import events from "../data/events.json";
import { useParams } from "react-router-dom";
export default function EventDetails() {
    const {name} = useParams();
  const e = events.find(e => e.name === name)
    return <div><h1>Event Details {e.name}   </h1>
    <p> {e.description}</p> </div>
}