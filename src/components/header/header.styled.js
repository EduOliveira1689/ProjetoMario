import styled, { css, keyframes } from "styled-components";

const jumpAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const baseStyles = css`
  width: 70px;
  height: auto;
`;

export const CapImg = styled.img`
  ${baseStyles};
`;

export const RotatingCapImg = styled.img`
  ${baseStyles};
  &:hover {
    animation: ${rotateAnimation} 1.5s linear infinite, ${jumpAnimation} 1.5s ease-in-out infinite;
  }

  @media screen and (max-width: 768px) {
 display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 65px;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 15;


  &.player-visible {
    position: fixed;
  }

  @media screen and (max-width: 768px) {
  background-color: black;
  }
`;

export const NavigationGroup = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 64px;
  padding-top: 24px;
  z-index: 15;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    left: 80%;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    justify-content: flex-end; 
  }
`;


export const ClosePlayerButton = styled.button`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  width: auto;
  height: 25px;
  display: flex;
  align-items: center;
  position: absolute;
  right: 5%;
  margin-top: 30px;
  border-radius: 5px;
  background-color: red;
  color: aliceblue;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  `;

export const NavigationContainer = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 48px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media screen and (max-width: 768px) {
   display: none;
  }
`;


export const SocialIcon = styled.svg`
  width: 25px;
  height: 20px;
  fill: #EDF1F7;
  opacity: 0.6;
  transition: opacity 0.3s, transform 0.3s;

  &:hover {
    opacity: 1;
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

export const ThemeButton = styled.button`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: aliceblue;
  cursor: pointer;
  position: relative;
  background-color: transparent;
  border: none;

  &:hover {
    color: red;
  }
`;

export const SubMenuContainer = styled.div`
  position: absolute;
  top: 150%;
  width: 250px;
  left: -50px;
  background-color: black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
  border-radius: 8px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 12px;
  }

  @media screen and (max-width: 768px) {
    left: 0;
    top: 150px;
   
    ul {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 14px;
  }

  li {
    color: aliceblue;
    font-weight: bold;
  }

  }

`;



export const SubMenuContainerMobile = styled.div`
  position: absolute;
  width: 250px;
  top: 80px;
  left: 20px;
  background-color: black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
  border-radius: 8px;

  li{
    list-style: none;
    left: 20px;
    margin-top: 8px;
  }
`;

export const SubMenuItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 8px;

  &.submenu-item:hover {
    color: aliceblue;
    background-color: red;
  }
`;

export const NavigationLink = styled.li`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  color: aliceblue;

  &:hover {
    color: red;

    ${ThemeButton} {
      color: aliceblue;
    }

    ${SubMenuItem} {
      color: aliceblue;
    }
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 60%;
    height: 1px;
    background-color: red;
    transform: scaleX(0);
    transition: all 0.4s;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;
