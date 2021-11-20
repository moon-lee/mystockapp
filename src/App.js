import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const company_info = '/asx-research/1.0/companies/ax1/header'
const asx_list = '/asx-research/1.0/companies/ax1/key-statistics'

var options = {
	method: 'GET',
	url: 'https://yfapi.net/v11/finance/quoteSummary/AX1.AX',
	params: {
		lang: 'en',
		region: 'AU',
		modules: 'defaultkeyStatistics',
	},
	headers: {
		'x-api-key': 'qoFQOEOBAm7gUeuBfZEqq7Tq0ylgxP228nZsL79D'
	}
};

function App() {
	const [companies, setCompanies] = useState([])
	//const [asx_companies, setAsxCompanies] = useState([])

	useEffect(function () {
		axios.get(company_info)
			.then(response => {
				//console.log(response.data.data)
				setCompanies(response.data.data)
			})
	}, [])


	useEffect(function () {
		axios.get(asx_list)
			.then(response => {
				console.log(response.data)
				//setAsxCompanies(response.data)
			})
	}, [])


	useEffect(function () {
		axios.request(options)
			.then(response => {
				console.log(response.data)
				//setAsxCompanies(response.data)
			})
	}, [])





	return (
		<div className="App">
			<h1>Stock Fundermental</h1>
			<table>

				{
					Object.entries(companies).map(([key, value]) => {
						return (
							<tr>
								<th>{key}</th>
								<td>{value.toString()}</td>
							</tr>
						)
					})
				}

			</table>

		</div>
	);
}

export default App;
