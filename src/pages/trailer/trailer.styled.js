import styled from 'styled-components';

export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 2;
  border-radius: 10px;
 `;

export const VideoContainer = styled.div`
  position: absolute;
  width: 80%;
  height: 60%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%; 
  cursor: pointer;
  z-index: 2; 
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 100px;
`;

export const DubladoButton = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color: #fe0016;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;

  :hover {
    background-color: #fff;
    color: #fe0016;
  }
`;

export const LegendadoButton = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color: #fe0016;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;
`;

export const BackButton = styled.button`
  margin-top: 650px;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color: #fe0016;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
  z-index: 3;
`;