export default function List({ activities, weather }) {
  if (weather === true) {
    return (
      <>
        <h2>The weather is awesome! Go outside and:</h2>
        <ul>
          {activities
            .filter((activity) => {
              return activity.isForGoodWeather === weather;
            })
            .map((_activity) => {
              return <li key={_activity.id}>{_activity.name}</li>;
            })}
        </ul>
      </>
    );
  }
  return (
    <>
      <h2>Bad weather outside! Here's what you can do now:</h2>
      <ul>
        {activities
          .filter((activity) => {
            return activity.isForGoodWeather !== weather;
          })
          .map((_activity) => {
            return <li key={_activity.id}>{_activity.name}</li>;
          })}
      </ul>
    </>
  );
}
