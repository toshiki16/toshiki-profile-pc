import React from "react";
import Header from "./Front_view/header";
import Navibar from "./Front_view/navibar";
import First from "./Front_view/first_view";

import Footer from "./Front_view/footer";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


const App = () => {
  return (
    <>
      <Navibar />
      {/* <Header /> */}
      <First />
      <Footer />
      <BrowserRouter>
        <Routes basename={process.env.PUBLIC_URL}>
          <Route path="/github of repositoriName/" element={App} />
          <Route path="/github of repositoriName/About" />
          <Route path="/github of repositoriName/Contact" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
