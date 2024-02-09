import React from "react";
import { Background, BackgroundOverlay } from "../backgroundVideo/backgroundVideo.styled"; // Importe estilos conforme necessário
import videoSource from "../../assets/background-video.mp4";

const BackgroundVideo = () => {
  return (
    <Background>
      <video loop autoPlay muted className="background-video">
        <source src={videoSource} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      <BackgroundOverlay />
    </Background>
  );
};

export default BackgroundVideo;