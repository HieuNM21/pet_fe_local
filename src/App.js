import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Service from "./components/Services/Service";
import PetCare from "./components/Services/PetCare";
import AdaptArea from "./components/Services/AdaptArea";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Banner />
      <Service />
      <PetCare/>
      <AdaptArea/>
    </Router>
  );
}

export default App;
