# API REST CRUD com Express

Este é um exemplo simples de uma API RESTful construída com Express.js para gerenciar dados de usuários. Ela suporta operações CRUD (Create, Read, Update, Delete) para recursos de usuário.

## Começando

1. Clone este repositório:

   ```bash
   git clone https://github.com/your-username/express-rest-api.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd express-rest-api
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor:

   ```bash
   npm start
   ```

   O servidor iniciará na porta 3001 por padrão. Você pode alterar a porta no código, se necessário.

## Pontos de Acesso da API

### GET /users

- Descrição: Obter todos os usuários.
- Parâmetros de consulta: Nenhum.
- Resposta:
  - Código de status: 200 OK
  - Corpo: Array de objetos de usuário.

### POST /users

- Descrição: Criar um novo usuário.
- Corpo da requisição: Objeto JSON com propriedades `name` e `age`.
- Resposta:
  - Código de status: 201 Created
  - Corpo: Objeto JSON do usuário recém-criado.

### PUT /users/:id

- Descrição: Atualizar um usuário existente por ID.
- Parâmetros da rota: `id` (ID do usuário).
- Corpo da requisição: Objeto JSON com `name` e/ou `age` atualizados.
- Resposta:
  - Código de status: 200 OK
  - Corpo: Objeto JSON do usuário atualizado.

### DELETE /users/:id

- Descrição: Excluir um usuário por ID.
- Parâmetros da rota: `id` (ID do usuário).
- Resposta:
  - Código de status: 204 No Content
  - Corpo: Nenhum.

## Middleware

A API inclui funções de middleware para tratamento de erros e validação de ID de usuário.

## Tratamento de Erros

A API utiliza blocos try-catch para tratamento de erros durante as requisições POST, capturando possíveis exceções.

## Dependências

- Express.js
- uuid
- cors

## Executando Testes

Para executar testes, utilize o seguinte comando:

```bash
npm test
```

## Contribuidores

- Seu Nome (@Gabrielps24)


Sinta-se à vontade para contribuir enviando pull requests ou relatando problemas!

✅ Servidor iniciado na porta 3001
