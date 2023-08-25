export default function Form({ onAddActivity }) {
  return (
    <form>
      <h1>Test</h1>
      <label htmlForm="activity-name">Name:</label>
      <input type="text" id="activity-name" />
      <label htmlForm="weather-status">Good-weather activity:</label>
      <input type="checkbox" id="weather-status" />
      <button>Submit</button>
    </form>
  );
}
