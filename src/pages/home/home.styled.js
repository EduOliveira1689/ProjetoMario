import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  width: 90%;
  padding: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
`;

export const DescriptionMovie = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: aliceblue;
    max-width: 570px;
    margin-top: 20px;
  }
`;

export const LogoMovie = styled.img`
  width: 250px;

  @media screen and (max-width: 768px) {
    width: 110px;
  }
`;

export const MarioLuigi = styled.img`
  width: auto;
  height: auto;

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 220px;
    margin-top: 20px;
  }
`;

export const BuyButton = styled.button`
  background-color: #fe0016;
  color: aliceblue;
  height: 40px;
  width: 140px;
  border-radius: 10px;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.5s;
  margin-left: auto;

  &:hover {
    background-color: aliceblue;
    color: #fe0016;
    border: 2px solid red;
  }
`;
