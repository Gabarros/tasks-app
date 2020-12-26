import React, { useState, useRef, useEffect } from "react";

import { Container } from "./styles";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let intervalRef = setInterval(counter, 1000);

    function counter() {
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

  return (
    <Container>
      <div>Contador: {counter}</div>
      <div>
        <button onClick={() => setIsCounting(true)} disabled={isCounting}>
          Iniciar Contador
        </button>
        <button onClick={() => setIsCounting(false)}>Parar Contador</button>
      </div>
    </Container>
  );
}
