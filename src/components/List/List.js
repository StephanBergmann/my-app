export default function List({ activities, weather, apiData }) {
  if (weather === true) {
    return (
      <>
        <h2>{`${apiData.condition} ${apiData.temperature}`}</h2>
        <h3>The weather is awesome! Go outside and:</h3>
        <ul>
          {activities
            .filter((activity) => {
              return activity.isForGoodWeather === weather;
            })
            .map((_activity) => {
              return (
                <li key={_activity.id}>
                  {_activity.name}
                  <button type="button">x</button>
                </li>
              );
            })}
        </ul>
      </>
    );
  }
  return (
    <>
      <h2>{`${apiData.condition} ${apiData.temperature}`}</h2>
      <h3>Bad weather outside! Here's what you can do now:</h3>
      <ul>
        {activities
          .filter((activity) => {
            return activity.isForGoodWeather !== weather;
          })
          .map((_activity) => {
            return (
              <li key={_activity.id}>
                {_activity.name}
                <button type="button">x</button>
              </li>
            );
          })}
      </ul>
    </>
  );
}
