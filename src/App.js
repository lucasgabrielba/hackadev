import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Boxes from "./components/Boxes/Boxes";
import Products from "./components/Products/Products";
import Shop from "./components/Shop/Shop";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {

  return (
    <>
      <Navbar />
      <Main />
      <Boxes />
      <Products />
      <Shop />
      <Footer />
    </>
  );
}

export default App;
