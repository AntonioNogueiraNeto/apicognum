# API de testes para Vaga Desenvolvedor(a) em Node.js - Cognum
Neste projeto foi desenvolvido uma API e um banco de dados 

Foi desenvolvido uma aplicação em Node.js para fazer um CRUD de posts.

Foi criado endpoints que estarão conectados ao seu banco de dados seguindo os princípios do REST;

Para fazer um post é necessário usar as rotas certas.;



## Stack utilizada
Back-end: Javascript, Node, Express, MySQL2, Docker

## Rodando O Docker
Rode os serviços node e db com o comando ```docker-compose up -d```.

Lembre-se de parar o mysql se estiver usando localmente na porta padrão (3306), ou adapte, caso queria fazer uso da aplicação em containers.

Esses serviços irão inicializar um container chamado ```teste_cogum_api``` e outro chamado ```teste_cogum_api_db```.
A partir daqui você pode rodar o container ```teste_cogum_api``` via CLI ou abri-lo no VS Code.
Use o comando ```docker exec -it teste_cogum_api bash```.

Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
Instale as dependências "Caso existam" com ```npm install```


#### Fazer get hello
```http
  GET /hello
```

#### FAZER GET Employees
```http
  GET /employees/
```
#### FAZER GET Employees/id
```http
  GET /employees/:id
```

####  CRIAR Employees
```http
  POST /employees
```


####  UPDATE Employees
```http
  PUT /employees/:id
```
#### DELETE Employees/:id
```http
  delete /employees/:id
```

```
```
#### FAZER GET populate
```http
  GET /populate/
```


## Autores


Antonio Henriques Nogueira Neto

- Github: [@AntonioHenriques](https://www.github.com/AntonioNogueiraNeto)
- Linkedin: [@AntonioHenrique](https://www.linkedin.com/in/antonionetodev/)
