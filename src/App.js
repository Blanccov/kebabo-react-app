import React from "react";
import "./App.scss";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import Button from "./components/ui/Button/Button";
import Home from "./pages/Home/Home";

function App() {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <Home />
      <Footer />
    </React.Fragment>
  );
}

export default App;
