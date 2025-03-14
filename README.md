# Fitness Station API

## Propósito

A Fitness Station API é uma aplicação backend desenvolvida para gerenciar empresas, usuários, folhas de treino, treinos e exercícios. Ela fornece endpoints para criar, atualizar, buscar e deletar esses recursos, facilitando a gestão de academias e seus clientes.

## Endpoints

### Auth

#### Login

- **URL:** `/auth/login`
- **Método:** `POST`
- **Corpo da Requisição:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Resposta:**
  ```json
  {
    "access_token": "string"
  }
  ```

### Companies

#### Criar Empresa

- **URL:** `/companies`
- **Método:** `POST`
- **Corpo da Requisição:**
  ```json
  {
    "name": "string"
  }
  ```
- **Resposta:**
  ```json
  {
    "id": "string",
    "name": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
  ```

#### Listar Empresas

- **URL:** `/companies`
- **Método:** `GET`
- **Resposta:**
  ```json
  [
    {
      "id": "string",
      "name": "string",
      "createdAt": "string",
      "updatedAt": "string"
    }
  ]
  ```

#### Buscar Empresa por ID

- **URL:** `/companies/:id`
- **Método:** `GET`
- **Resposta:**
  ```json
  {
    "id": "string",
    "name": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
  ```

#### Atualizar Empresa

- **URL:** `/companies/:id`
- **Método:** `PATCH`
- **Corpo da Requisição:**
  ```json
  {
    "name": "string"
  }
  ```
- **Resposta:**
  ```json
  {
    "id": "string",
    "name": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
  ```

#### Deletar Empresa

- **URL:** `/companies/:id`
- **Método:** `DELETE`

### Users

#### Criar Usuário

- **URL:** `/users`
- **Método:** `POST`
- **Corpo da Requisição:**
  ```json
  {
    "username": "string",
    "password": "string",
    "companyId": "string"
  }
  ```
- **Resposta:**
  ```json
  {
    "id": "string",
    "username": "string",
    "createdAt": "string",
    "updatedAt": "string",
    "companyId": "string"
  }
  ```

#### Listar Usuários

- **URL:** `/users`
- **Método:** `GET`
- **Resposta:**
  ```json
  [
    {
      "id": "string",
      "username": "string",
      "createdAt": "string",
      "updatedAt": "string",
      "companyId": "string"
    }
  ]
  ```

#### Buscar Usuário por ID

- **URL:** `/users/:id`
- **Método:** `GET`
- **Resposta:**
  ```json
  {
    "id": "string",
    "username": "string",
    "createdAt": "string",
    "updatedAt": "string",
    "companyId": "string"
  }
  ```

#### Atualizar Usuário

- **URL:** `/users/:id`
- **Método:** `PATCH`
- **Corpo da Requisição:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Resposta:**
  ```json
  {
    "id": "string",
    "username": "string",
    "createdAt": "string",
    "updatedAt": "string",
    "companyId": "string"
  }
  ```

#### Deletar Usuário

- **URL:** `/users/:id`
- **Método:** `DELETE`

### Workout Sheets

#### Criar Folha de Treino

- **URL:** `/workoutSheets`
- **Método:** `POST`
- **Corpo da Requisição:**
  ```json
  {
    "name": "string",
    "type": "string",
    "isActive": "boolean",
    "companyId": "string",
    "users": [
      {
        "id": "string"
      }
    ],
    "workouts": [
      {
        "name": "string",
        "exercises": [
          {
            "name": "string",
            "reps": "number",
            "sets": "number",
            "muscleGroup": "string",
            "restPeriod": "number",
            "videoLink": "string"
          }
        ]
      }
    ]
  }
  ```
- **Resposta:**
  ```json
  {
    "id": "string",
    "name": "string",
    "type": "string",
    "isActive": "boolean",
    "companyId": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
  ```

#### Listar Folhas de Treino

- **URL:** `/workoutSheets`
- **Método:** `GET`
- **Resposta:**
  ```json
  [
    {
      "id": "string",
      "name": "string",
      "type": "string",
      "isActive": "boolean",
      "companyId": "string",
      "createdAt": "string",
      "updatedAt": "string"
    }
  ]
  ```

#### Buscar Folha de Treino por ID

- **URL:** `/workoutSheets/:id`
- **Método:** `GET`
- **Resposta:**
  ```json
  {
    "id": "string",
    "name": "string",
    "type": "string",
    "isActive": "boolean",
    "companyId": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
  ```

#### Atualizar Folha de Treino

- **URL:** `/workoutSheets/:id`
- **Método:** `PUT`
- **Corpo da Requisição:**
  ```json
  {
    "name": "string",
    "type": "string",
    "isActive": "boolean",
    "companyId": "string"
  }
  ```
- **Resposta:**
  ```json
  {
    "id": "string",
    "name": "string",
    "type": "string",
    "isActive": "boolean",
    "companyId": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
  ```

#### Deletar Folha de Treino

- **URL:** `/workoutSheets/:id`
- **Método:** `DELETE`

### Workouts

#### Criar Treino

- **URL:** `/workouts`
- **Método:** `POST`
- **Corpo da Requisição:**
  ```json
  {
    "name": "string",
    "workoutSheetId": "string"
  }
  ```
- **Resposta:**
  ```json
  {
    "id": "string",
    "name": "string",
    "workoutSheetId": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
  ```

#### Listar Treinos

- **URL:** `/workouts`
- **Método:** `GET`
- **Resposta:**
  ```json
  [
    {
      "id": "string",
      "name": "string",
      "workoutSheetId": "string",
      "createdAt": "string",
      "updatedAt": "string"
    }
  ]
  ```

#### Buscar Treino por ID

- **URL:** `/workouts/:id`
- **Método:** `GET`
- **Resposta:**
  ```json
  {
    "id": "string",
    "name": "string",
    "workoutSheetId": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
  ```

#### Atualizar Treino

- **URL:** `/workouts/:id`
- **Método:** `PATCH`
- **Corpo da Requisição:**
  ```json
  {
    "name": "string"
  }
  ```
- **Resposta:**
  ```json
  {
    "id": "string",
    "name": "string",
    "workoutSheetId": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
  ```

#### Deletar Treino

- **URL:** `/workouts/:id`
- **Método:** `DELETE`

### Exercises

#### Criar Exercício

- **URL:** `/exercises`
- **Método:** `POST`
- **Corpo da Requisição:**
  ```json
  {
    "name": "string",
    "reps": "number",
    "sets": "number",
    "muscleGroup": "string",
    "restPeriod": "number",
    "videoLink": "string",
    "workoutId": "string"
  }
  ```
- **Resposta:**
  ```json
  {
    "id": "string",
    "name": "string",
    "reps": "number",
    "sets": "number",
    "muscleGroup": "string",
    "restPeriod": "number",
    "videoLink": "string",
    "workoutId": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
  ```

#### Listar Exercícios

- **URL:** `/exercises`
- **Método:** `GET`
- **Resposta:**
  ```json
  [
    {
      "id": "string",
      "name": "string",
      "reps": "number",
      "sets": "number",
      "muscleGroup": "string",
      "restPeriod": "number",
      "videoLink": "string",
      "workoutId": "string",
      "createdAt": "string",
      "updatedAt": "string"
    }
  ]
  ```

#### Buscar Exercício por ID

- **URL:** `/exercises/:id`
- **Método:** `GET`
- **Resposta:**
  ```json
  {
    "id": "string",
    "name": "string",
    "reps": "number",
    "sets": "number",
    "muscleGroup": "string",
    "restPeriod": "number",
    "videoLink": "string",
    "workoutId": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
  ```

#### Atualizar Exercício

- **URL:** `/exercises/:id`
- **Método:** `PATCH`
- **Corpo da Requisição:**
  ```json
  {
    "name": "string",
    "reps": "number",
    "sets": "number",
    "muscleGroup": "string",
    "restPeriod": "number",
    "videoLink": "string"
  }
  ```
- **Resposta:**
  ```json
  {
    "id": "string",
    "name": "string",
    "reps": "number",
    "sets": "number",
    "muscleGroup": "string",
    "restPeriod": "number",
    "videoLink": "string",
    "workoutId": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
  ```

#### Deletar Exercício

- **URL:** `/exercises/:id`
- **Método:** `DELETE`

## Configuração

Para configurar a API, crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/database
HASH_SECRET=your_hash_secret
JWT_SECRET=your_jwt_secret
```

## Executando a Aplicação

Para executar a aplicação, utilize os seguintes comandos:

```bash
# Instalar dependências
npm install

# Rodar a aplicação em modo de desenvolvimento
npm run start:dev

# Rodar a aplicação em modo de produção
npm run start:prod
```

## Testes

Para rodar os testes, utilize o seguinte comando:

```bash
npm run test
```


