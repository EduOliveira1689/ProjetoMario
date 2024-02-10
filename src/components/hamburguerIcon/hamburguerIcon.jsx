import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { StyledBurguerIcon } from "./hamburguerIcon.styled";

function HamburgerIcon({ onClick }) {
  return (
    <StyledBurguerIcon onClick={onClick}>
      <FontAwesomeIcon
        icon={faBars}
        size="2x"
        style={{ color: "aliceblue", cursor: "pointer" }}
      />
    </StyledBurguerIcon>
  );
}

export default HamburgerIcon;
