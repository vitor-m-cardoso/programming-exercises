import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target; 

    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { text } = this.state;
    console.log(`Um nome foi enviado: ${ text }`);
  }

  render() {
    const { text } = this.state;
    return (
      <form>
        <h2>React-Redux Form:</h2>
        <label>
          Nome:
          <input type="text" name='text' value={ text } onChange={ this.handleChange } />
        </label>
        <button type="button" onClick={ this.handleClick }>Enviar</button>
      </form>
    );
  }
}

export default Form;
