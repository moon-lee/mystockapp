import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const url = 'asx-research/1.0/companies/ax1/header'

function App() {
  const [companies, setCompanies] = useState([])

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
      <table>
        <thead>
          {
            Object.entries(companies).map(([key, value]) => {
              return (
                <th>{key}</th>
              )
            })
          }

        </thead>
        <tbody>
          {
            Object.entries(companies).map(([key, value]) => {
              return (
                <td>{value.toString()}</td>
              )
            })
          }

        </tbody>
      </table>
    </div>
  );
}

export default App;
