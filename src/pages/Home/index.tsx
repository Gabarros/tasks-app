import React, { useState, useEffect } from "react";
import { Dialog } from "@material-ui/core";

import Button from "./components/Button";
import SaveTaskForm from "./components/SaveTaskForm";

import { Container, Timer, ButtonsContainer } from "./styles";

export default function Home() {
  const [counter, setCounter] = useState<number>(0);
  const [formattedCounter, setFormattedCounter] = useState<string>("00:00");
  const [isCounting, setIsCounting] = useState(false);
  const [isOpenSaveDialog, setOpenSaveDialog] = useState(false);

  useEffect(() => {
    let intervalRef = setInterval(startCounter, 1000);

    function startCounter() {
      if (!isCounting) {
        clearInterval(intervalRef);
      } else {
        setCounter(prevCounter => prevCounter + 1);
      }
    }

    return () => {
      clearInterval(intervalRef);
    };
  }, [isCounting]);

  useEffect(() => {
    let formattedCounter = new Date(counter * 1000).toISOString().substr(11, 8);
    setFormattedCounter(formattedCounter);
  }, [counter]);

  return (
    <Container>
      <Dialog open={isOpenSaveDialog} onClose={() => setOpenSaveDialog(false)}>
        <SaveTaskForm onClose={() => setOpenSaveDialog(false)} />
      </Dialog>
      <Timer>{formattedCounter}</Timer>
      <ButtonsContainer>
        <Button
          isCounting={isCounting}
          onClick={setIsCounting}
          disabled={isCounting}
        />
      </ButtonsContainer>
      {!isCounting && counter !== 0 && (
        <button onClick={() => setOpenSaveDialog(true)}>Salvar Tarefa</button>
      )}
    </Container>
  );
}
