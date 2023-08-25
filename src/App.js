import "./App.css";
import Form from "./components/Form/Form.js";
import { uid } from "uid";
import List from "./components/List/List.js";
import useLocalStorageState from "use-local-storage-state";
import { useEffect, useState } from "react";

export default function App() {
  const [apiData, setApiData] = useState({});
  const [weather, setWeather] = useState();
  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather/europe"
      );
      const data = await response.json();
      setWeather(data.isGoodWeather);
      setApiData(data);
    }
    fetchWeather();
  }, []);

  const [activities, setActivities] = useLocalStorageState("activity", {
    defaultValue: [],
  });

  function handleAddActivity(activity) {
    setActivities([...activities, { id: uid(), ...activity }]);
  }

  console.log(apiData);

  return (
    <main>
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} weather={weather} apiData={apiData} />
    </main>
  );
}
