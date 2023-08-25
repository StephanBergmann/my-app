import "./App.css";
import Form from "./components/Form/Form.js";
import { uid } from "uid";
import List from "./components/List/List.js";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const isGoodWeather = true;

  const [activities, setActivities] = useLocalStorageState("activity", {
    defaultValue: [],
  });

  function handleAddActivity(activity) {
    setActivities([...activities, { id: uid(), ...activity }]);
  }

  return (
    <main>
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} weather={isGoodWeather} />
    </main>
  );
}
