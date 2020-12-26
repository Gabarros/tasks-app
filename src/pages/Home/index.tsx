import React, { useState, useEffect } from "react";

import Button from "./components/Button";

import { Container, Timer, ButtonsContainer } from "./styles";

export default function Home() {
  const [counter, setCounter] = useState<number>(0);
  const [formattedCounter, setFormattedCounter] = useState<string>("00:00");
  const [isCounting, setIsCounting] = useState(false);

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
      <Timer>{formattedCounter}</Timer>
      <ButtonsContainer>
        <Button
          isCounting={isCounting}
          onClick={setIsCounting}
          disabled={isCounting}
        />
      </ButtonsContainer>
    </Container>
  );
}
