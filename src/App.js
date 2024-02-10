import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BackgroundVideo from "../src/components/backgroundVideo/backgroundVideo";
import Home from "./pages/home/home";
import Wallpapers from "../src/pages/wallpapers/wallpapers";
import Header from "./components/header/header";
import Trailer from "./pages/trailer/trailer";
import History from "./pages/history/history";
import Footer from "./components/footer/footer";
import ReactPlayer from "react-player";

const App = () => {
  const [selectedSong, setSelectedSong] = useState(null);

  const onPlaySong = (song) => {
    setSelectedSong(song);
  };

  const onStopPlayer = () => {
    setSelectedSong(null);
  };

  return (
    <Router>
      <Header
        onStopPlayer={onStopPlayer}
        onPlaySong={onPlaySong}
        selectedSong={selectedSong}
      />
      <BackgroundVideo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Wallpapers" element={<Wallpapers />} />
        <Route
          path="/Trailer"
          element={<Trailer onStopPlayer={onStopPlayer} />}
        />
        <Route path="/Story" element={<History />} />
      </Routes>
      <Footer />
      <ReactPlayer
        url={selectedSong?.url ?? ""}
        playing={true}
        controls={true}
        volume={0.1}
        width={0}
        height={0}
      />
    </Router>
  );
};

export default App;
