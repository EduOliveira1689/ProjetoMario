import styled from "styled-components";

export const WallpaperContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-height: 80%;
  overflow-y: auto; 
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;

  &:hover {
    cursor: grabbing; 
  }

  transition: cursor 0.3s ease;  
    &::-webkit-scrollbar {
    width: 0px;
    transition: width 0.3s ease;
    overflow: hidden;
  }

  @media screen and (max-width: 768px) {
  display: flex;
  flex-direction: column;
  }
  
`;

export const Loader = styled.img`
  position: absolute;
  width: 700px;
  height: 450px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 300px ;
  }
`;

export const WallpaperImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  image-rendering: optimizeSpeed;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  @media screen and (max-width: 768px) {
    display: none;
  }

`;


export const ModalContent = styled.div`
  position: relative;
  background-color: transparent;
  padding: 20px;
  border-radius: 5px;
`;

export const ImageContainer = styled.div`
  position: relative;
  text-align: center;
`;

export const Image = styled.img`
  max-width: calc(100vw - 200px);
  max-height: calc(100vh - 200px); 
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 99999;
  color: aliceblue; 
  font-size: 16px;
  font-weight: bold;
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5));
  border: none;
  cursor: pointer;
  color: aliceblue; 
  font-size: 24px; 
  transition: 0.3s;
  z-index: 2;
  height: 100%;
`;

export const LeftArrow = styled(NavigationButton)`
  left: 0;
  transform: translateY(-50%);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    opacity: 0;
    transition: 0.3s;
    z-index: -1;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const RightArrow = styled(NavigationButton)`
  right: 0;
  transform: translateY(-50%);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 25px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    opacity: 0;
    transition: 0.3s;
    z-index: -1;
  }

  &:hover::before {
    opacity: 1;
  }
`;
