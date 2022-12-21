const baseUrl = 'http://api.weatherapi.com/v1';
const numDays = 2;

//Key and KeyURL
const key = process.env.REACT_APP_WEATHER_API;
const KeyURL = `?key=${key}`;

//Current Data and Forecast
export const currentData = (location_name) =>
	`${baseUrl}/forecast.json${KeyURL}&q=${location_name}&days=${numDays}&aqi=no&alerts=no`;
