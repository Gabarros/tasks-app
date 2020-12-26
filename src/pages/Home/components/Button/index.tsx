import React, {useState} from 'react';
import { PlayArrowRounded , StopRounded} from '@material-ui/icons';


import { Container } from './styles';

export interface ButtonProps {
  onClick: Function;
  disabled: boolean;
  isCounting: boolean;

};

export default function Button(props: ButtonProps){
  return <Container onClick={() => props.isCounting ? props.onClick(false) : props.onClick(true)}>
    {
      !props.isCounting ?
      <PlayArrowRounded id="icon" />
      : 
      <StopRounded id="icon" />
    }
   
    <button disabled={props.disabled}>
      {props.isCounting ? 'Parar Contador' : 'Iniciar Contador'}
    </button>
  </Container>;
}

