import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import Bg from "../assets/images/bg.jpg";
import Hbg from "../assets/images/HomeBackground.jpg";
import Form from "../components/Form";
import Info from "../components/Info";

const Component = styled(Box)({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  padding: "0 250px",
  margin: "0 auto",
  backgroundImage: `url(${Hbg})`,
  backgroundSize: "cover",
});

const Image = styled(Box)({
  backgroundImage: `url(${Bg})`,
  height: "80%",
  width: "27%",
  backgroundSize: "cover",
  borderRadius: "20px 0 0 20px",
});

const WeatherInfo = styled(Box)({
  width: "73%",
  height: "80%",
  display: "flex",
  flexDirection: "column",
});

const Home = () => {
  const [weatherData, setWeatherData] = useState({});
  return (
    <Component>
      <Image></Image>
      <WeatherInfo>
        <Form setWeatherInfo={setWeatherData} />
        <Info weatherData={weatherData} />
      </WeatherInfo>
    </Component>
  );
};

export default Home;
