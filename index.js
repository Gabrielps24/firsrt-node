const express = require("express");
const uuid = require("uuid");

const port = 3000;
const server = express();
server.use(express.json());

/*
     - Query params => site.com/users?name=dante&age=56  //FILTROS
     - Route params => /users/2    // BUSCAR. DELETAR OU ATUALIZAR ALGO ESPECÍFICO
     - Request body => { "name":dante, "age":56 }

     - GET          => Buscar informações no back-end
     - POST         => Criar informações no back-end
     - PUT / PATCH  => Alterar/Atualizar informações no back-end
     - DELETE       => Deletar informações no back-end

     - Middleware   => INTERCEPTADOR => Tem o poder de para ou alterar dados na requisão 
*/

const users = [];

const checkUserId = (request, response, next) => {
    const { id } = request.params;
    
    const index = users.findIndex((user) => user.id === id);

  if (index < 0) {
    return response.status(404).json({ message: "user not found" });
  }
    
  request.userIndex = index
  request.userId = id

  next()

}

/*

  TRATAMENTO DE ERROS ( try catch )

*/
server.get("/users", (request, response) => {
  return response.json(users);
});

server.post("/users", (request, response) => {
try {  
  const { name, age } = request.body;

  const user = { id: uuid.v4(), name, age };

  users.push(user);

  return response.status(201).json(user);
} catch(error){
  return response.status(404).json(error.message)
} finally {
  console.log("finish")
} 
});

server.put("/users/:id", checkUserId, (request, response) => {
  const { name, age } = request.body;
  const index = request.userIndex 
  const id = request.userId

  const updateUser = { id, name, age };

  users[index] = updateUser;

  return response.json(updateUser);
});

server.delete("/users/:id", checkUserId, (request, response) => {
  const index = request.userIndex

  users.splice(index, 1);

  return response.status(204).json();
});

server.listen(port, () => {
  console.log(`✅ Server started on port ${port}`);
});
