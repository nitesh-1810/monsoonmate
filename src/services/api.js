import axios from "axios";

const API_KEY = "9c526a18dde750571bbc7e30888f3c2b";
const API_URL = "http://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city) => {
  try {
    let response = await axios.get(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (err) {
    console.error("Error while calling api ", err.message);
    return err.response;
  }
};
