import axios from 'axios';

const API_KEY = '40377088d000fa327c7b6487e6308e8e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},gb`;

	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request  // request is a Promise, the redux-promise middleware (https://www.npmjs.com/package/redux-promise), only passes on the actions once the promise is resolved. 
	};
}