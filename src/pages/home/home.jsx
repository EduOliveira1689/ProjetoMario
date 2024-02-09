import React from "react";
import {
  BuyButton,
  Container,
  DescriptionMovie,
  LogoMovie,
  MarioLuigi
} from "./home.styled";
import logoMovie from "../../assets/logo-movie.png"
import marioLuigi from "../../assets/mario-and-luigi (1).png"

function Home() {
  return (
    <>
      <Container>
        <DescriptionMovie>
          <LogoMovie src={logoMovie} alt="Logo Mario" />
          <span>
            Um dia, Mario e Luigi vão parar no reino dos cogumelos, governado pela Princesa Peach,
            mas ameaçado pelo rei dos Koopas, Bowser, que vai fazer de tudo para conseguir
            reinar todos os lugares. É então quando Luigi é raptado por Bowser e o usa para
            procurar Mario, o único capaz de deter o Koopa e reestabelecer a paz.
          </span>
          <BuyButton>Comprar Ingresso</BuyButton>
        </DescriptionMovie>
        <MarioLuigi src={marioLuigi} alt="Mario e Luigi" />
      </Container>
    </>
  );
}

export default Home;
