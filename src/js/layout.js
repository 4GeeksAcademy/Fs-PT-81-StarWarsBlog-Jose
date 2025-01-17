import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.js";
import injectContext from "./store/appContext";
import { Details } from "./views/details.jsx";
import { DetailsVehicles } from "./views/detailsVehicles.jsx";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { DetailsPlanets } from "./views/detailsPlanets.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/people/:uid" element={<Details />} />
            <Route path="/details/vehicle/:uid" element={<DetailsVehicles />} />
            <Route path="/details/planets/:uid" element={<DetailsPlanets />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
