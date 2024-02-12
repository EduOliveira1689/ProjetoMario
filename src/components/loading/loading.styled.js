import styled from "styled-components";

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
    height: 300px;
  }
`;
