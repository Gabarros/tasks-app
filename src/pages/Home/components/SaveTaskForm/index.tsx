import React, { useState } from "react";
import { TextField, Select } from "@material-ui/core";

// import { Container } from './styles';

export default function SaveTaskForm() {
  const [taskName, setTaskName] = useState("");
  const [taskType, setTaskType] = useState("");

  return (
    <form action="">
      <p>Salvar Tarefa: </p>
      <TextField
        onChange={e => setTaskName(e.target.value)}
        variant="outlined"
      />
      <button>Salvar</button>
      <button>Cancelar</button>
    </form>
  );
}
