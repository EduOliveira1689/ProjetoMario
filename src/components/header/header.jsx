import { useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import {
  Container,
  NavigationContainer,
  NavigationGroup,
  NavigationLink,
  RotatingCapImg,
  SocialContainer,
  SocialIcon,
  SubMenuContainer,
  SubMenuItem,
  ThemeButton,
  ClosePlayerButton,
  SubMenuContainerMobile,
} from "./header.styled";
import imgCap from "../../assets/logo-cap.png";
import HamburgerIcon from "../hamburguerIcon/hamburguerIcon";

const playlist = [
  {
    title: "Bônus Level",
    url: require("../../assets/sounds/Bônus Level (Versão Vinil) - Super Mario Bros. O Filme.m4a"),
  },
  {
    title: "DK RAP",
    url: require("../../assets/sounds/DK RAP - Música usada em Super Mario Bros. O Filme.m4a"),
  },
  {
    title: "It's a Dog eat Plumber World ",
    url: require("../../assets/sounds/It's a Dog eat Plumber World - Música oficial de Super Mario Bros. O Filme.m4a"),
  },
  {
    title: "King of the Koopa",
    url: require("../../assets/sounds/King of the Koopa - Música oficial de Super Mario Bros. O Filme.m4a"),
  },
  {
    title: "PEACHES ",
    url: require("../../assets/sounds/PEACHES - Versão Brasileira (Oficial).m4a"),
  },
  {
    title: "Plumbin' ain't Easy",
    url: require("../../assets/sounds/Plumbin' ain't Easy - Música Oficial de Super Mario Bros. O Filme.m4a"),
  },
  {
    title: "Press Start",
    url: require("../../assets/sounds/Press Start - Música original de Super Mario Bros. O Filme.m4a"),
  },
  {
    title: "Saving Brooklyn",
    url: require("../../assets/sounds/Saving Brooklyn - Música oficial de Super Mario Bros. O Filme.m4a"),
  },
  {
    title: "Strange New World",
    url: require("../../assets/sounds/Strange New World  - Música oficial de Super Mario Bros. O Filme.m4a"),
  },
  {
    title: "Super Mario Bros. Opus",
    url: require("../../assets/sounds/Super Mario Bros. Opus - Musica original de Super Mario Bros. O Filme.m4a"),
  },
  {
    title: "The Darklands",
    url: require("../../assets/sounds/The Darklands - Música oficial de Super Mario Bros. O Filme.m4a"),
  },
  {
    title: "The warp pipe",
    url: require("../../assets/sounds/The warp pipe - Música Oficial de Super Mario Bros. O Filme.m4a"),
  },
  {
    title: "Welcome to the Mushroom Kingdom",
    url: require("../../assets/sounds/Welcome to the Mushroom Kingdom - Música oficial de Super Mario Bros. O Filme.m4a"),
  },
  {
    title: "World 1-1",
    url: require("../../assets/sounds/World 1-1 - Música oficial de Super Mario Bros. O Filme.m4a"),
  },
];

function MobileNavigation({ onClose }) {
  const handleLinkClick = () => {
    onClose();
  };
  return (
    <SubMenuContainerMobile>
      <RotatingCapImg src={imgCap} alt="Imagem Cap" />
      <NavigationLink>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
          Home
        </Link>
      </NavigationLink>
      <NavigationLink>
        <Link to="story" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
          História
        </Link>
      </NavigationLink>
      <NavigationLink>
        <Link to="wallpapers" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
          Wallpapers
        </Link>
      </NavigationLink>
      <NavigationLink>
        <Link to="trailer" style={{ textDecoration: "none", color: "inherit" }} onClick={handleLinkClick}>
          Trailer
        </Link>
      </NavigationLink>
    </SubMenuContainerMobile>
  );
}

function Header({ onSelectLanguage }) {
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [volume] = useState(0.1);

  const playSong = (song) => {
    setSelectedSong(song);
    setIsPlayerVisible(true);
    setIsSubMenuVisible(false);
    closeMobileMenu();
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closePlayer = () => {
    setIsPlayerVisible(false);
    setSelectedSong(null);
  };


  const handleLanguageSelect = () => {
    onSelectLanguage(); 
    closePlayer();
  };

  console.log(onSelectLanguage)

  return (
    <Container>
      <NavigationGroup>
        <RotatingCapImg src={imgCap} alt="Imagem Cap" />
        <NavigationContainer>
          <NavigationLink>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </NavigationLink>
          <NavigationLink>
            <Link to="/story" style={{ textDecoration: "none", color: "inherit" }}>
              Story
            </Link>
          </NavigationLink>
          <NavigationLink>
            <Link to="/wallpapers" style={{ textDecoration: "none", color: "inherit" }}>
              Wallpapers
            </Link>
          </NavigationLink>
          <NavigationLink>
            <Link to="/trailer" style={{ textDecoration: "none", color: "inherit" }}>
              Trailer
            </Link>
          </NavigationLink>
          <NavigationLink>
            <ThemeButton onClick={() => setIsSubMenuVisible(!isSubMenuVisible)}>
              Musicas Tema
            </ThemeButton>
            {isSubMenuVisible && (
              <SubMenuContainer>
                <ul>
                  {playlist.map((song) => (
                    <SubMenuItem key={song.title} className="submenu-item" onClick={() => playSong(song)}>
                      {song.title}
                    </SubMenuItem>
                  ))}
                </ul>
              </SubMenuContainer>
            )}
          </NavigationLink>
        </NavigationContainer>
        <SocialContainer>
          <a href="https://www.facebook.com/eduardo.goncalves.7543?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <SocialIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
            </SocialIcon>
          </a>
          <a href="https://www.instagram.com/edu.oliveira1689?igsh=MW9sZGwyZ3B5NnNydQ==" target="_blank" rel="noopener noreferrer">
            <SocialIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </SocialIcon>
          </a>

          <a href="https://www.tiktok.com/discover/filme-do-mario" target="_blank" rel="noopener noreferrer">
            <SocialIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
            </SocialIcon>
          </a>
          <a href="https://twitter.com/supermariomovie" target="_blank" rel="noopener noreferrer">
            <SocialIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </SocialIcon>
          </a>
          <a href="https://www.youtube.com/channel/UCwKlp9jF5YrHspGOnnJjM1g" target="_blank" rel="noopener noreferrer">
            <SocialIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
            </SocialIcon>
          </a>
        </SocialContainer>
      </NavigationGroup>

      {isMobileMenuOpen && <MobileNavigation onClose={closeMobileMenu} />} 
      <div style={{ marginLeft: '10px' }}>
        <HamburgerIcon onClick={toggleMobileMenu} />
      </div>
      {isPlayerVisible && selectedSong && (
        <div>
          <ReactPlayer
            url={selectedSong.url}
            playing={true}
            controls={true}
            volume={volume}
            width={0}
            height={0}
          />
          <ClosePlayerButton onClick={closePlayer}>Para Musica</ClosePlayerButton>
        </div>
      )}
    </Container>
  );
}

export default Header;