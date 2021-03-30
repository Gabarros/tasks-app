import React, { useState } from "react";
import { TextField, Select, Button } from "@material-ui/core";

import { Container, ButtonsContainer } from "./styles";

interface SaveTaskFormProps {
  onClose: Function;
}

export default function SaveTaskForm({ onClose }: SaveTaskFormProps) {
  const [taskName, setTaskName] = useState("");
  const [taskType, setTaskType] = useState("");

  const handleSaveTask = () => {};

  return (
    <Container action="">
      <p>Salvar Tarefa: </p>
      <TextField
        onChange={e => setTaskName(e.target.value)}
        variant="outlined"
        size="medium"
        label="Nome da tarefa"
      />
      <ButtonsContainer>
        <Button variant="contained" color="secondary" onClick={() => onClose()}>
          Cancelar
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSaveTask()}
        >
          Salvar
        </Button>
      </ButtonsContainer>
    </Container>
  );
}
