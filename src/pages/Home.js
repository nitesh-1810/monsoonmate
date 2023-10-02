import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import Bg from "../assets/images/bg.jpg";
import Form from "../components/Form";
import Info from "../components/Info";

const Component = styled(Box)({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  width: "65%",
  margin: "0 auto",
  zIndex: "1",
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
