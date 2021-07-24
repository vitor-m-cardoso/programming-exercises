import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.showInfos();
            e.preventDefault();
          }}
        >
          Mostrar informações
        </button>
        <button
          onClick={(e) => {
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
            e.preventDefault();
          }}
        >
          Limpar
        </button>
      </div>
    );
  }
}

export default Button;