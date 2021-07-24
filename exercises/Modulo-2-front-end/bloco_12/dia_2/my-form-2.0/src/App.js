import React, { Component } from 'react'
import Input from './Components/Input'
import estados from './Components/Data'

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      formulario: '',
      nome: '',
    };

    this.showInfos = this.showInfos.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  showInfos() {
    if (this.state.formulario === '') {
      this.setState({
        formulario: (
          <div>
            {Object.entries(this.state).map((element) => (
              <p key={element[0]}>
                {element[0]}: {element[1]}
              </p>
            ))}
          </div>
        ),
      });
    }
  }

  onBlur({ target }) {
    const { name, value } = target;

    if(/^\d/.test(value)) {
      this.setState({
        [name]: '',
      });
    }
  }

  handleClick({ target }) {
    const { name, value } = target;

    this.setState({
      [name]:
        name === 'nome' 
        ? value.toUpperCase()
        : name === 'endereco'
        ? value.replace(/\W/g, '')
        : value,
    })
  }

  render() {
    let active = true;
    return (
      <div className="App">
      <form>
        <fieldset>
          <Input 
            maxLength='40'
            value={this.state.nome}
            required
            name='nome'
            onChange={this.handleClick}
          />
          <Input 
            maxLength='50'
            value={this.state.email}
            required
            name='email'
            onChange={this.handleClick}
          />
          <Input 
            maxLength='11'
            value={this.state.cpf}
            required
            name='cpf'
            onChange={this.handleClick}
          />
          <Input 
            maxLength='200'
            value={this.state.endereco}
            required
            name='endereco'
            onChange={this.handleClick}
          />
          <Input 
            maxLength='28'
            value={this.state.cidade}
            required
            name='cidade'
            onChange={this.handleClick}
            onBlur={this.onBlur}
          />
          <select name='estados' required onChange={this.handleClick}>
            {estados.map((state, index) => (<option key={ index }>{state}</option>))}
          </select>
          <Input 
            value='casa'
            required
            name='house'
            onChange={this.handleClick}
            type='radio'
          />
          <Input 
            value='apartamento'
            required
            name='house'
            onChange={this.handleClick}
            type='radio'
          />
        </fieldset>
        <fieldset>
          <textarea
            maxLength='40'
            required
            value={this.state.cargo}
            name='cargo'
            onMouseEnter={() => {
              if (active) {
                alert('Preencha com cuidado esta informação.');
                active = false;
              }
            }}
            onChange={this.handleClick}
          />
          <textarea 
            maxLength='500'
            required
            value={this.state.descricao}
            name='descricao'
            onChange={this.handleClick}
          />
        </fieldset>
          <button
          onClick={(element) => {

            this.showInfos();
            element.preventDefault();
          }}
        >
          Mostrar informações
        </button>
        <button
          onClick={(element) => {
            this.setState({
              cargo: "",
              cidade: "",
              cpf: "",
              description: "",
              email: "",
              endereco: "",
              form: "",
              house: "",
              nome: "",
              resumo: "",
            });
            element.preventDefault();
          }}
        >
          Limpar
        </button>
          {this.state.formulario}
        </form>
      </div>
    );
  }
}

export default App;
