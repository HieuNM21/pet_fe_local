import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Service from "./components/Services/Service";
import Container from "@mui/material/Container";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Banner />
      <Service />
    </Router>
  );
}

export default App;
