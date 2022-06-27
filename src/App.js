import React from "react";
// import Header from "./Front_view/header";
import Navibar from "./Front_view/navibar";
import First from "./Front_view/first_view";

import Footer from "./Front_view/footer";

// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";


const App = () => {
  return (
    <>
      <Navibar />
      <First />
      <Footer />
      {/* <BrowserRouter>
        <Routes basename={process.env.PUBLIC_URL}>
          <Route path="/toshiki-profile-pc/" element={<App />} />
          <Route path="/toshiki-profile-pc/About" />
          <Route path="/toshiki-profile-pc/Contact" />
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App;
