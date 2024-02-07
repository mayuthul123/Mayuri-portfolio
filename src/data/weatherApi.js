const baseUrl = "https://api.weatherapi.com/v1/current.json?key=87e12a97063347efbb1235120242001";

export const getWeatherCity = async (city) =>
{
    const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`);
    return await response.json();
}

export const getWeatherLocation = async (lat,lon) =>
{
    const response = await fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
}