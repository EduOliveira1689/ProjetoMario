import React, { useState, useEffect } from "react";
import {
  WallpaperContainer,
  WallpaperImage,
  ModalContainer,
  ModalContent,
  ImageContainer,
  Image,
  CloseButton,
  LeftArrow,
  RightArrow,
  Loader,
} from "./wallpapers.styled";
import { ImagesServ } from "../../utils/baseImages/baseImages";
import ImgLoading from "../../assets/loading.gif";

function Wallpapers() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2600);

    return () => clearTimeout(delay);
  }, []);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? ImagesServ.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === ImagesServ.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      {isLoading ? (
        <Loader src={ImgLoading} alt="Loading..." />
      ) : (
        <WallpaperContainer>
          {ImagesServ.map((item, index) => (
            <WallpaperImage
              key={index}
              src={item.img}
              alt={`Wallpaper ${index}`}
              onClick={() => openModal(index)}
            />
          ))}
        </WallpaperContainer>
      )}

      {modalOpen && (
        <ModalContainer>
          <ModalContent>
            <CloseButton onClick={closeModal}>FECHAR</CloseButton>
            <ImageContainer>
              <Image src={ImagesServ[currentImageIndex].img} />
              <LeftArrow onClick={goToPreviousImage}>{"<"}</LeftArrow>
              <RightArrow onClick={goToNextImage}>{">"}</RightArrow>
            </ImageContainer>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
}

export default Wallpapers;
