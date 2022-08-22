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
import Login from "./Components/Login/Login";
import { Heading } from "./Components/ProductPage/Heading/Heading";
import SingleProduct from "./Components/SingleProduct/ProductInfo/SingleProduct";
import Uae from "./Components/Uae/Uae";

function App() {
  return (
    <div className="App">
      <Header className="Header" />
      <Cat />
      {/* <Car /> */}
      {/* <Img />
      <Card className="CC" />
      <Elec />
      <Deal />
      <Uae />
      <Ad /> */}
      <Heading />
      {/* <SingleProduct /> */}
      {/* This is the Product page */}
      {/* <Login /> */}
      <Footer />
    </div>
  );
}

export default App;
