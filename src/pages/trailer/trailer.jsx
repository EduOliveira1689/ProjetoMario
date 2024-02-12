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

function Trailer({ onStopPlayer }) {
  const handleSelectDublado = () => {
    setSelectedVideo(videoSourceDub);
    setLanguageSelected(true);
    onStopPlayer();
  };

  const handleSelectLegendado = () => {
    setSelectedVideo(videoSourceLeg);
    setLanguageSelected(true);
    onStopPlayer(); // 3. Chamando a função onSelectLanguage ao selecionar o idioma
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
          <LegendadoButton onClick={handleSelectLegendado}>
            Legendado
          </LegendadoButton>
        </ButtonContainer>
      )}
    </VideoContainer>
  );
}

export default Trailer;
