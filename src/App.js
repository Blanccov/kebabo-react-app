import React from "react";
import "./App.scss";
import Footer from "./components/layouts/Footer";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
