import React from "react";
import { Loader } from "./loading.styled";
import ImgLoading from "../../assets/loading.gif";

export function Loading() {
  return (
    <Loader>
      <img src={ImgLoading} alt="Tela de carregamento." />
    </Loader>
  );
}
