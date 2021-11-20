import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import StockData from './components/StockData';

const company_info = '/asx-research/1.0/companies/ax1/header'

var options = {
	method: 'GET',
	url: 'https://yfapi.net/v11/finance/quoteSummary/AX1.AX',
	params: {
		lang: 'en',
		region: 'AU',
		modules: 'summaryDetail',
	},
	headers: {
		'x-api-key': 'qoFQOEOBAm7gUeuBfZEqq7Tq0ylgxP228nZsL79D'
	}
};

function App() {
	const [companies, setCompanies] = useState([])
	const [yahooInfo, setyahooInfo] = useState({beta:[], ask:[]})

	useEffect(function () {
		axios.get(company_info)
			.then(response => {
				setCompanies(response.data.data)
			})
	}, [])


	useEffect(function () {
		axios.request(options)
			.then(response => {
				//console.log(response.data.quoteSummary.result[0].summaryDetail.beta)
				setyahooInfo(response.data.quoteSummary.result[0].summaryDetail)
			})
	}, [])





	return (
		<div className="App">
			<h1>Stock Fundermental</h1>
			<StockData stockdata={companies}/>
			<StockData stockdata={yahooInfo.beta}/>
			<StockData stockdata={yahooInfo.ask}/>

		</div>
	);
}

export default App;
