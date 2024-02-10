import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  height: 82%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  padding: 20px;
  overflow: auto;
  cursor: grab;

  &:hover {
    overflow-y: auto;
    cursor: grabbing;
  }

  transition: overflow-y 0.3s ease, cursor 0.3s ease;
  &::-webkit-scrollbar {
    width: 0px;
    transition: width 0.3s ease;
    overflow: hidden;
  }

  &::-webkit-scrollbar-track {
    background-color: #333;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #4c4c4c;
    border-radius: 4px;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    max-width: 600px;
    top: 10px;
    overflow-x: hidden;
  }
`;

export const ContentContainer = styled.div`
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 800px;
  width: 100%;
  padding: 20px;
  color: aliceblue;
  overflow-y: auto;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextContainer = styled.div`
  height: auto;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const StyledText = styled.span`
  display: block;
  width: 100%;
  color: aliceblue;
  font-size: 16px;
`;

export const ImageHistory = styled.img`
  width: 800px;
  height: 500px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;
