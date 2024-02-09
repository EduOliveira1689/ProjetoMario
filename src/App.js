import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BackgroundVideo from "../src/components/backgroundVideo/backgroundVideo";
import Home from "./pages/home/home";
import Wallpapers from "../src/pages/wallpapers/wallpapers";
import Header from "./components/header/header";
import Trailer from "./pages/trailer/trailer"; // Importando o componente Trailer
import History from "./pages/history/history";
import Footer from "./components/footer/footer";

const App = () => {

  const handleSelectLanguage = () => {
  };

  return (
    <Router>
      <Header />
      <BackgroundVideo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Wallpapers" element={<Wallpapers />} />
        <Route path="/Trailer" element={<Trailer onSelectLanguage={handleSelectLanguage} />} />
        <Route path="/Story" element={<History />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
