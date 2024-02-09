import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 40px;
  z-index: 100;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
  background-color: black;
  }
`;

export const DescriptionFooter = styled.span`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: aliceblue;
  cursor: default;
`;
