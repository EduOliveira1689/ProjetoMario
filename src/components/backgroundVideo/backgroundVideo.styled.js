import styled from "styled-components";

export const Background = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`;

export const BackgroundOverlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(109deg, rgba(10, 12, 16, 0.99) 15%, rgba(10, 12, 16, 0.7) 50%, rgba(10, 12, 16, 0.99) 85%);
`;