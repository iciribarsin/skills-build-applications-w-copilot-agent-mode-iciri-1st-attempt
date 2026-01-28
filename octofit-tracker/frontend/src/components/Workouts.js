import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const endpoint = 'https://iciribarsin-8000.app.github.dev/api/workouts/';

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setWorkouts(results);
        console.log('Fetched workouts:', results);
        console.log('Endpoint used:', endpoint);
      })
      .catch(err => console.error('Error fetching workouts:', err));
  }, [endpoint]);

  return (
    <div>
      <h2 className="mb-4">Workouts</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-primary">
            <tr>
              <th>User</th>
              <th>Workout</th>
              <th>Reps</th>
              <th>Sets</th>
              <th>Distance</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout, idx) => (
              <tr key={idx}>
                <td>{workout.user}</td>
                <td>{workout.workout}</td>
                <td>{workout.reps || '-'}</td>
                <td>{workout.sets || '-'}</td>
                <td>{workout.distance || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Workouts;
