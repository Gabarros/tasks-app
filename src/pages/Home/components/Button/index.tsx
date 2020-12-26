import React from "react";
import { PlayArrowRounded, PauseRounded } from "@material-ui/icons";

import { Container } from "./styles";
export interface ButtonProps {
  onClick: Function;
  disabled: boolean;
  isCounting: boolean;
}

export default function Button(props: ButtonProps) {
  return (
    <Container
    isDisabled={props.disabled}
      onClick={() =>
        props.isCounting ? props.onClick(false) : props.onClick(true)
      }
    >
      {!props.isCounting ? (
        <PlayArrowRounded id="icon" />
      ) : (
        <PauseRounded id="icon" />
      )}
      {props.isCounting ? "Pausar Contador" : "Iniciar Contador"}
    </Container>
  );
}
