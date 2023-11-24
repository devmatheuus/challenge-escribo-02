# Desafio Escribo 02

### Links úteis
- URL de deploy: https://challenge-escribo-02.onrender.com
- Documentação do projeto: https://challenge-escribo-02.onrender.com/docs/


### Formas de execução do projeto

_Existem duas formas para executar a API:_

-   _Executando o projeto localmente_
-   _Url do deploy_

```
Dica: 

Para testar os endpoints criados, acesse a documentação: https://challenge-escribo-02.onrender.com/docs/
```

### Executando o projeto localmente

-   _Crie um arquivo **.env** na raíz da projeto_
-   _Siga o exemplo abaixo para criar as variávies de ambiente necessárias para a execução do projeto_

---

```
POSTGRES_USER="postgres-user"
POSTGRES_PASSWORD="postgres-password"
POSTGRES_DB="postgres-db-name"
POSTGRES_DB_TEST="postgres-db-test-name"
DB_HOST="postgres-db-host"
SECRET_KEY="your-secret-key"
PORT=3000

```

---

-   _Após configurar o arquivo **.env** e ter as dependências do projeto instaladas, execute o seguinte comando em seu terminal para criar as tabelas:_

```
npm run typeorm migration:run -- -d src/data-source.ts
```

_Após a criação das tabelas, inicie a aplicação com o comando:_

```
npm run dev
```

-   _Ao fim do processo, a seguinte mensagem deve ser mostrada no terminal:_

```
Server is listening on port http://localhost:3000
```


### Url do deploy

_A forma mais rápida para executar a aplicação, basta usar a seguinte url:_

```
https://challenge-escribo-02.onrender.com
```

## Testes

O projeto conta com testes unitários, para executá-los digite o seguinte comando em seu terminal:

```
  npm run test
```


## Documentação dos Endpoints

A API está totalmente documentada com Swagger. A documentação está disponível no link abaixo:

```
https://challenge-escribo-02.onrender.com/docs/
```
- Observação: A url do deploy pode apresentar lentidão inicialmente por conta da hospedagem gratuita.


### Validações de rota

A aplicação contém fortes verificações com relação a consistência dos dados enviados. A mesma está preparada para retornar respostas claras e objetivas para os mais variádos casos de erro.
