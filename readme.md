## Instalação

Instalar as depêndencias do projeto

```bash
  yarn install | npm install
```

Iniciar o projeto

```bash
  yarn run dev | yarn dev | npm run dev
```

## Documentação da API

#### Retorna todos os estudantes, com filtragem por nome opcional

```http
  GET /students/:name?
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Opcional**. Nome do usuário para filtragem |

#### Criar um estudante

```http
  POST /students
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. Nome do growdever |
| `email`      | `string` | **Obrigatório**. Email do growdever |
| `age`      | `number` | **Obrigatório**. Idade do growdever |
| `turma`      | `number` | **Obrigatório**. Turma do growdever |
| `class`      | `number` | **Obrigatório**. Turma do growdever |
| `mentorName`      | `string` | **Obrigatório**. Nome do mentor |

#### Atualizar um estudante através do email dele

```http
  PUT /students/email
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Opcional**. Nome do growdever |
| `email`      | `string` | **Opcional**. Email do growdever |
| `age`      | `number` | **Opcional**. Idade do growdever |
| `turma`      | `number` | **Opcional**. Turma do growdever |
| `class`      | `number` | **Opcional**. Turma do growdever |
| `mentorName`      | `string` | **Opcional**. Nome do mentor |

#### Apagar um estudante através do email dele

```http
  DELETE /students/email
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | **Obrigatório**. Email do growdever |
