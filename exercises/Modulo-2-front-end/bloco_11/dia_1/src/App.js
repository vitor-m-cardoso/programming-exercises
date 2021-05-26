import React, { Component } from 'react';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas = ['Acordar', 'Escovar os dentes', 'Tomar cafe', 'Almocar'];

class App extends Component {
  render() {
    return (
      <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
    )
  }
}

export default App;
