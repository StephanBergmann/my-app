export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // console.log(data);
    onAddActivity(data);
    event.target.reset();
    // console.log(event.target.elements);
    event.target.elements[0].focus();
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new Activity:</h1>
      <label htmlForm="activity-name">Name:</label>
      <input type="text" id="activity-name" name="name" />
      <label htmlForm="weather-status">Good-weather activity:</label>
      <input type="checkbox" id="weather-status" name="isForGoodWeather" />
      <button>Submit</button>
    </form>
  );
}
