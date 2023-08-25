import "./App.css";
import Form from "./components/Form/Form.js";
import { useState } from "react";
import { uid } from "uid";

export default function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(activity) {
    setActivities([...activities, { id: uid(), ...activity }]);
  }

  return (
    <main>
      <Form onAddActivity={handleAddActivity} />
    </main>
  );
}
