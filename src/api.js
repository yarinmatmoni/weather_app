
const baseUrl = "http://api.weatherapi.com/v1";

//Key and KeyURL
const key = process.env.REACT_APP_WEATHER_API;
const KeyURL = `?key=${key}`;

//Current Data 
export const currentData = (location_name) => `${baseUrl}/current.json${KeyURL}&q=${location_name}`;
