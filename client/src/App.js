import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const City = (props) => {
  return (
    <div className="col-md-12">
      <div className="card">
        <div className="card-body">
          <div className="date">
            <ul id="nav" className="list-group list-group-horizontal">
              <li className="list-group-item">
                {props.city.ID}
              </li>
              <li className="list-group-item">
                {props.city.Name}
              </li>
              <li className="list-group-item">
                {props.city.Population}
              </li>
              <li className="list-group-item">
                {props.city.CountryName}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [cities, setCities] = useState([]);
  if (cities.length === 0) {
    fetch(`http://localhost:3333/city`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        setCities(data);
      });
  }
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          {cities.map((city, i) => (
            <City {...city} key={i} city={city} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
