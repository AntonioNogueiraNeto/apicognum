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

:warning: Atenção :warning: Caso opte por utilizar o Docker, TODOS os comandos disponíveis no package.json ( npm run dev) devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando docker exec citado acima.

:warning: Atenção :warning: O git dentro do container não vem configurado com suas credenciais. Faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

:warning: Atenção :warning: Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

:warning: Atenção :warning: Caso você esteja usando macOS e ao executar o docker-compose up -d se depare com o seguinte erro:

```bash
The Compose file './docker-compose.yml' is invalid because:
Unsupported config option for services.db: 'platform'
Unsupported config option for services.node: 'platform'
```




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