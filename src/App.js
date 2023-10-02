import Home from "./pages/Home";
import BG from "./assets/images/HomeBackground.jpg";
import { Box, styled } from "@mui/material";
function App() {
  const Container = styled(Box)({
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url(${BG})`,
      backgroundSize: "cover",
      filter: "blur(2px)",
      zIndex: "-1",
    },
  });
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;
