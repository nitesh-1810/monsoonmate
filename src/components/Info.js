import { Box, Typography } from "@mui/material";
import {
  Brightness5,
  Place,
  Brightness7,
  Opacity,
  Brightness6,
  Dehaze,
  Cloud,
} from "@mui/icons-material";
import React from "react";
import styled from "@emotion/styled";
// import errBg from "../assets/images/EnterCity.jpg";

const Row = styled(Typography)({
  padding: 10,
  fontSize: 18,
  letterSpacing: 2,
  "& > svg": {
    marginRight: "",
  },
});

const Landing = styled(Typography)({
  color: "red",
  padding: "10px 10px",
  flex: 1,
  background: "rgba(0,0,0,0.6)",
  //   backgroundImage: `url(${errBg})`,
  //   backgroundSize: "cover",
});

const Info = ({ weatherData }) => {
  return weatherData && Object.keys(weatherData).length > 0 ? (
    <Box
      style={{
        padding: "10px 10px",
        color: "white",
        flex: 1,
        background: "rgba(0,0,0,0.6)",
      }}
    >
      <Row>
        <Place />
        Location : {weatherData.name}, {weatherData.sys.country}
      </Row>
      <Row>
        <Brightness7 /> Temperature : {weatherData.main.temp}
      </Row>
      <Row>
        <Opacity /> Humidity : {weatherData.main.humidity}
      </Row>
      <Row>
        <Brightness5 /> Sun Rise :{" "}
        {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
      </Row>
      <Row>
        <Brightness6 /> Sun Set :{" "}
        {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
      </Row>
      <Row>
        <Dehaze /> Weather : {weatherData.weather[0].main},{" "}
        {weatherData.weather[0].description}
      </Row>
      <Row>
        <Cloud /> Cloud : {weatherData.clouds.all} %
      </Row>
    </Box>
  ) : (
    <Landing>Enter City</Landing>
  );
};

export default Info;
