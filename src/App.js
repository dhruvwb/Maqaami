import "./App.css";
import Ad from "./Components/Ad/Ad";
import Car from "./Components/Car/Car";
import Card from "./Components/Cards/Card";
import Cat from "./Components/Cat/Cat";
import Deal from "./Components/Deal/Deal";
import Elec from "./Components/Elec/Elec";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Img from "./Components/Img1/Img";
import Uae from "./Components/Uae/Uae";

function App() {
  return (
    <div className="App">
      <Header className="Header" />
      <Cat />
      <Car />
      {/* <Img /> */}
      <Card className="CC" />
      <Elec />
      <Deal />
      <Uae />
      <Ad />
      <Footer />
    </div>
  );
}

export default App;
