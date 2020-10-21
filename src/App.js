import React, { Component } from "react";

import "./App.css";
import Accueil from "./Components/Accueil/Accueil";
import Presentation from "./Components/Presentation/Presentation";

import Plats from "./Components/Plats/Plats";
import Avantages from "./Components/Avantages/Avantages";
import Specialites from "./Components/Specialites/Specialites";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Avis from "./Components/Avis/Avis";
import Navbar from "./Components/Navbar/Navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main role="main">
          <Accueil />
          <Presentation />
          <Plats />
          <Avantages />
          <Specialites />
          <Avis />
          <Contact />
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
