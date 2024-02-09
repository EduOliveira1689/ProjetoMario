import React, { useState } from "react";
import {
  StyledVideo,
  VideoContainer,
  ButtonContainer,
  DubladoButton,
  LegendadoButton,
  BackButton,
} from "./trailer.styled";
import videoSourceDub from "../../assets/trailer/trailer.mp4";
import videoSourceLeg from "../../assets/trailer/trailerLEG.mp4";

function Trailer({ onSelectLanguage }) { 
  const handleSelectDublado = () => {
    setSelectedVideo(videoSourceDub);
    setLanguageSelected(true);
    onSelectLanguage(); 
  };

  const handleSelectLegendado = () => {
    setSelectedVideo(videoSourceLeg);
    setLanguageSelected(true);
    onSelectLanguage(); 
  };

  const handleGoBack = () => {
    setLanguageSelected(false);
    setSelectedVideo(null);
  };

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [languageSelected, setLanguageSelected] = useState(false);

  return (
    <VideoContainer>
      {selectedVideo && (
        <>
          <StyledVideo controls autoPlay>
            <source src={selectedVideo} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </StyledVideo>
          {languageSelected && (
            <ButtonContainer>
              <BackButton onClick={handleGoBack}>Voltar</BackButton>
            </ButtonContainer>
          )}
        </>
      )}
      {!selectedVideo && (
        <ButtonContainer>
          <DubladoButton onClick={handleSelectDublado}>Dublado</DubladoButton>
          <LegendadoButton onClick={handleSelectLegendado}>Legendado</LegendadoButton>
        </ButtonContainer>
      )}
    </VideoContainer>
  );
}

export default Trailer;
