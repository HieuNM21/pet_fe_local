import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Container from "@mui/material/Container";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Banner />
      </Container>
    </Router>
  );
}

export default App;
