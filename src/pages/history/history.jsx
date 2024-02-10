import React from "react";
import {
  Container,
  ContentContainer,
  ImageHistory,
  StyledText,
  TextContainer,
} from "./history.styled";
import image1 from "../../assets/History/1.jpeg";
import image2 from "../../assets/History/2.jpeg";

function History() {
  return (
    <Container>
      <ContentContainer>
        <ImageHistory src={image1} alt="" />
        <TextContainer>
          <StyledText>
            Há 65 milhões de anos um meteorito caiu na Terra, matando a grande
            maioria dos dinossauros e dividindo o universo em duas dimensões
            paralelas. Os dinossauros sobreviventes acabaram cruzando para uma
            nova dimensão e evoluíram para uma raça humanoide mais inteligente.
            Milhões de anos depois, em 1973, uma misteriosa mulher deixa um
            grande ovo, junto com uma brilhante pedra, em um orfanato católico.
            Enquanto ela tenta fugir pelos encanamentos subterrâneos da cidade,
            ela é abordada pelo Rei Koopa, que exige a localização da pedra; um
            desmoronamento repentino ocorre, matando a mulher, embora Koopa
            escape. No orfanato, o ovo se choca, dando a luz a uma menina.
            <br />
            <br />
            Vinte anos depois, os encanadores ítalo-americanos Mario e Luigi
            residem no bairro do Brooklyn, em Nova York. Eles estão prestes a
            ser derrotados no ramo de encanamentos pela empresa concorrente
            Scapelli Construction Company, operada por uma máfia e liderada por
            Anthony Scapelli. Luigi se apaixona pela estudante Daisy da
            Universidade de Nova Iorque, que está cavando sob a Ponte do
            Brooklyn em busca de ossos de dinossauros. Depois de um encontro,
            Daisy leva Luigi de volta à ponte apenas para testemunhar dois dos
            homens de Scapelli sabotando-a, deixando os canos de água abertos.
            Mario e Luigi conseguem consertar o vazamento, mas ficam
            inconscientes após serem golpeados por Iggye e Spike, capangas e
            primos de Koopa, que sequestram Daisy. Mario e Luigi despertam e os
            perseguem por um portal interdimensional que os leva a Dinohattan.
            <br />
            <br />
            Iggy e Spike percebem que não trouxeram a rocha de Daisy, que nada
            mais é que um fragmento de meteorito que Koopa está tentando obter
            para fundir seu mundo com o mundo humano. É então revelado que Daisy
            é a princesa perdida da outra dimensão. Quando Koopa depôs o pai de
            Daisy como rei e o transformou em fungo, sua mãe, a rainha, a levou
            para o Brooklyn. O portal foi então selado, mas os homens de
            Scapelli inadvertidamente reabriram o portal quando explodiram a
            caverna. Koopa, com isso, passou a enviar Spike e Iggy para
            encontrar Daisy e a rocha para fundir as dimensões e torná-lo
            ditador dos dois mundos. No entanto, depois que Koopa os submete a
            um de seus experimentos para torná-los mais inteligentes, Spike e
            Iggy percebem as más intenções de Koopa e ficam do lado dos irmãos
            Mario. Daisy é levada para a Torre Koopa, onde conhece Yoshi. Koopa
            informa a Daisy que ela descendeu dos dinossauros, acreditando que
            apenas Daisy pode fundir os mundos por causa de sua herança real.
            Eventualmente, o irmãos Mario resgatam Daisy com a ajuda de Toad, um
            guitarrista bem-humorado que foi transformado em um Goomba após ser
            capturado pelos capangas de Koopa.
            <br />
            <br />
          </StyledText>
        </TextContainer>
        <ImageHistory src={image2} alt="" />
        <TextContainer>
          <StyledText>
            <br />
            <br />
            Eventualmente, os dois mundos se fundem e Koopa transforma Scapelli
            em um chimpanzé após utilizar uma arma que "regride" a evolução da
            espécie de seu alvo antes de ir atrás de Mario, mas Luigi e Daisy
            conseguem remover o fragmento do meteorito e os mundos se separam
            novamente. Em Dinohattan, Mario confronta Koopa e eventualmente o
            derrota quando ele e Luigi disparam suas armas de regressão em Koopa
            e o detonam com um Bob-omb. Koopa, agora transformado em um feroz
            tiranossauro semi-humanóide, tenta matar os Mario, mas eles o
            destroem de uma vez por todas ao regressá-lo a um verdadeiro
            tiranossauro e, em seguida, a uma sopa primordial. O pai de Daisy é
            restaurado como rei após a derrota de Koopa. Os cidadãos celebram e
            imediatamente destroem qualquer coisa que fazia referência ao
            ditador Koopa como cartazes. Luigi declara seu amor por Daisy e quer
            que ela vá para o Brooklyn com ele, mas Daisy não pode sair de seu
            mundo até que o dano causado por Koopa seja reparado, além de querer
            passar mais tempo com seu pai. Desiludido, Luigi se despede de Daisy
            com um beijo enquanto ele e Mario voltam para casa, no Brooklyn, com
            Daisy observando-os partir. Três semanas depois, os irmãos Mario
            estão se preparando para o jantar quando sua história chega ao
            noticiário e o âncora diz que eles deveriam ser chamados de "Super
            Mario Bros". Daisy então chega em sua porta e pede aos irmãos Mario
            para ajudá-la em uma nova missão. Em uma cena pós-créditos, dois
            empresários japoneses propõem fazer um videogame baseado em Iggy e
            Spike, agora na Terra, que decidem pelo título "The Super Koopa
            Cousins".
          </StyledText>
        </TextContainer>
      </ContentContainer>
    </Container>
  );
}

export default History;
