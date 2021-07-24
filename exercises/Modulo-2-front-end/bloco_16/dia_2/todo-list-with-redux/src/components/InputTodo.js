import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';

class InputTodo extends Component {
  constructor() {
    super();

    this.state = {
      inputText: ''
    }
    this.handleAddText = this.handleAddText.bind(this);
  }

  handleAddText({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { addNewTask } = this.props;
    const { inputText } = this.state;
    return (
      <div>
        <h2>Lista de Tarefas:</h2>
        <input type="text" name="inputText" onChange={(element) => this.handleAddText(element) } placeholder="Adicione uma nova tarefa" />
        <div>
          <br />
          <button type="button" onClick={ () => addNewTask(inputText) }>Adicionar Item</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addNewTask: (task) => dispatch(Actions.addTask(task)),
})

export default connect(null, mapDispatchToProps)(InputTodo)
