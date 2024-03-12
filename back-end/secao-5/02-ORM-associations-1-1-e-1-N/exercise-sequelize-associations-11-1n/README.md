# Boas vindas ao exercício de _Sequelize_: Relacionamentos 1:1 e 1:N

## 🛠 Módulos utilizados

Esse projeto foi construído utilizando Node 16.15.1 em conjunto com os seguintes módulos:

- express 4.18.1
- sequelize 6.21.1
- sequelize-cli 6.6.1
- mysql2 2.3.3
- nodemon 2.0.19

<details>
<summary><strong>Instruções para rodar a aplicação via Docker</strong></summary><br>

- Existe um arquivo `docker-compose.yml` configurado para executar os _containers_ via Docker.

1. Inicie os _containers_

```bash
docker-compose up -d
```

2. Acesse o contêiner da API

```bash
docker exec -it exercise-sequelize-associations-11-1n-api-1 bash
```

3. Instale as dependências

```bash
npm install
```

4. Execute os seguintes comandos para criar a base de dados `trybe_blog_comment` no seu servidor MySQL e popular as tabelas com alguns dados

```bash
npx sequelize-cli db:drop
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

5. Inicie o servidor da API

```bash
npm run dev
```

</details>
<br>
<details>
<summary><strong>O que foi desenvolvido:</strong></summary>

### _Model_ `Account` com os seguintes atributos:

- **id**: chave primária de indexação dos registros de conta. Valor do tipo _inteiro_;
- **email**: responsável por armazenar um endereço de email que será utilizado como informação para entrar no sistema. Valor do tipo _string_ (_varchar_ no SGBD);
- **password**: responsável por armazenar a senha da conta. Valor do tipo _string_ (_varchar_ no SGBD).

### _Model_ `Profile` com os seguintes atributos:

- **id**: chave primária de indexação dos perfis de conta. Valor do tipo _inteiro_;
- **firstName**: responsável por armazenar o primeiro nome da pessoa. Valor do tipo _string_ (_varchar_ no SGBD);
- **lastName**: responsável por armazenar o último nome da pessoa. Valor do tipo _string_ (_varchar_ no SGBD);
- **phone**: responsável por armazenar o telefone da pessoa. Valor do tipo _string_ (_varchar_ no SGBD);

### _Model_ `Comment` com os seguintes atributos:

- **id**: chave primária de indexação dos comentários. Valor do tipo _inteiro_;
- **message**: responsável por armazenar o texto de um comentário de uma determinada conta. Valor do tipo _string_ (_varchar_ no SGBD);
- **upvoting**: responsável por armazenar a quantidade de votos positivos que um comentário recebeu. Valor do tipo _integer_;
- **downvoting**: responsável por armazenar a quantidade de votos negativos que um comentário recebeu. Valor do tipo _integer_;

### _Endpoint_ `GET /accounts/:id`

- Endpoint responsável por listar uma conta específica com todas as informações de perfíl.

- Abaixo um exemplo de retorno esperado ao realizar uma requisição em `GET /accounts/1`:

```json
{
  "id": 1,
  "email": "elaine.stevens@email.com",
  "profile": {
   "id": 1,
   "firstName": "Elaine",
   "lastName": "Stevens",
   "phone": "(116) 941 9747",
   "accountId": 1
  }
}
```

### _Endpoint_ `GET /accounts/v2/:id`

- Endpoint responsável por listar apenas o email da conta solicitada.

- Abaixo um exemplo de retorno esperado ao realizar uma requisição em `GET /accounts/v2/1`:

```json
{
 "id": 1,
 "email": "elaine.stevens@email.com",
}
```

### _Endpoint_ `GET /accounts/:id/comments`

- Endpoint responsável por listar os comentários de uma determinada conta.

- Abaixo um exemplo de retorno esperado ao realizar uma requisição em `GET /accounts/1/comments`:

```json
[
 {
  "id": 1,
  "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec erat fringilla, accumsan felis eu, ullamcorper velit. Mauris at nunc a sem imperdiet pretium.",
  "upvoting": 2,
  "downvoting": 23,
  "accountId": 1
 },
 {
  "id": 2,
  "message": "Nada que vale a pena é fácil. Lembre-se disso",
  "upvoting": 28,
  "downvoting": 15,
  "accountId": 1
 }
]
```

## _Endpoint_ `POST /accounts`

- Endpoint responsável por registrar uma nova conta e um perfíl.

- A requisição deve conter o seguinte _JSON_ no corpo (_body_):

```json
{
  "email": "luke.skywalker@tryber.com",
  "password": "c3p0123",
  "firstName": "Luke",
  "lastName": "Skywalker",
  "phone": "(832) 9999 1234",
}
```

## _Endpoint_ `POST /accounts/:id/comment`

- Endpoint responsável por cadastrar um comentário que esteja relacionado a uma conta.

- A requisição deve conter o seguinte _JSON_ no corpo (_body_):

```json
{
 "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec erat fringilla, accumsan felis eu, ullamcorper velit. Mauris at nunc a sem imperdiet pretium.",
},
```
</details>
