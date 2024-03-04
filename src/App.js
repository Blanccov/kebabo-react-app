import React from "react";
import "./App.scss";
import Footer from "./components/layouts/Footer";
import { Outlet } from "react-router-dom";

import __test__ from "./components/ui/__test__";

function App() {

  const test = __test__();

  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
