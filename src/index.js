import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import axios from 'axios';

const url = 'asx-research/1.0/companies/ax1/header'
//var json_data = new Object();

axios.get(url).then(response => {
  const json_data = response.data

  console.log(json_data)

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}).catch(err => console.log(err))

