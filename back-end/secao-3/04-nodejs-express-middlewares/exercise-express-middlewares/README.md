# Boas vindas ao exercício de Express - Middlewares

## Entregáveis

<details>

  <summary><strong>O que foi desenvolvido:</strong></summary>

- _Middlewares_ que validam os campos:
  - `name`;
  - `price`;
  - `description`;
  - `createdAt`;
  - `rating`;
  - `difficulty`.
- Endpoint `POST` com a rota `/signup`;
- Endpoint `POST` com a rota `/activities`;
- _Middleware_ de autenticação ao endpoint `POST` com a rota `activities`.

</details>

<details>

  <summary><strong>Habilidades:</strong></summary>

- Criação de _middlewares_ no **Express**;
- Utilização _middlewares_ para realizar **validações**;
- Utilização _middlewares_ para **proteger rotas** da aplicação.

</details>

## Objetivo

- Construir uma aplicação back-end utilizando _Node.js_ com _Express_ que auxilia na criação e compartilhamento de locais ainda não registrados na natureza;
- Cadastrar novas atividades de ecoturismo com as seguintes informações:
  - Nome da atividade;
  - Preço;
  - Descrição contendo:
    - avaliação;
    - dificuldade;
    - data de criação da atividade.
- Cadastro de usuários das atividades de ecoturismo com as seguintes informações:
  - Email;
  - Senha;
  - Primeiro nome;
  - Telefone;
- Permitir que somente usuários cadastrados realizem o cadastro de novas atividades de ecoturismo.
