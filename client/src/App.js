import React, { useEffect, useState } from 'react';

function App() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/destinations')
      .then(res => res.json())
      .then(setDestinations);
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Tourism Guide & Booking Platform</h1>
      <ul>
        {destinations.map(dest => (
          <li key={dest.id}>
            <strong>{dest.name}</strong>: {dest.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
