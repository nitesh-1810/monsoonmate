import React, { useState } from "react";
import { Box, InputBase, Button } from "@mui/material";
import styled from "@emotion/styled";
import { getWeather } from "../services/api";

const Container = styled(Box)({
  backgroundColor: "#445A6F",
  padding: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Input = styled(InputBase)({
  color: "#fff",
  marginRight: "20px",
  fontSize: 18,
});

const Search = styled(Button)({
  backgroundColor: "#e67e22",
});

const Form = ({ setWeatherInfo }) => {
  const [data, setData] = useState({ city: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(e.target.value, e.target.name, data);
  };

  const getWeatherData = async () => {
    if (data.city !== "") {
      let result = await getWeather(data.city);
      console.log(result);
      setWeatherInfo(result);
    }
  };

  return (
    <Container>
      <Input
        placeholder="Enter City Name"
        onChange={handleChange}
        name="city"
      />

      <Search variant="contained" onClick={getWeatherData}>
        Get Weather
      </Search>
    </Container>
  );
};

export default Form;
