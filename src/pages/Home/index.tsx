import React, { useState, useEffect } from "react";

import Button from './components/Button';

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
        <Button isCounting={isCounting} onClick={setIsCounting} disabled={isCounting} />
      
      </div>
    </Container>
  );
}
