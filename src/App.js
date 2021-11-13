import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const url = 'asx-research/1.0/companies/ax1/header'

function App() {
  const [companies, setCompanies] = useState([])

  // useEffect(function () {
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  // }, [])

  //console.log(companies)

  useEffect(function () {
    axios.get(url)
    .then(response => {
      console.log(response.data.data)
      setCompanies(response.data.data)
    })
  }, [])


  return (
    <div className="App">
      <h1>Stock Fundermental</h1>
      <ul>
        {
          Object.entries(companies).map(([key,value]) => {
            return (
              <li>{key} : {value.toString()} </li>
            )
          })
        }
      </ul>

    </div>
  );
}

export default App;
