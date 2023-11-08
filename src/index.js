import express from 'express';

const app = express();

// Middlewares -> Interceptadores de código
app.use(express.json());

let myLogger = function (req, res, next) {
  console.log(`Request Method: ${req.method} | Request URL: ${req.originalUrl}`);
  next();
};

app.use(myLogger);

let isMentor = function (req, res, next) {
  const body = req.body

  if (body.mentorName === undefined) {
    return res.status(401).json('Informe o nome do mentor')
  }

  const hasMentor = mentors.find((mentor) => {
    return mentor.name === body.mentorName
  })

  if (hasMentor === undefined) {
    return res.status(401).json('Nome de mentor inválido')
  }

  next();
};

// Bancos de dados falso -> Array simples que é apagado quando salvamos o projeto
const students = [
  {
    name: 'Leonardo Krindges',
    age: 21,
    class: 17,
    email: 'leonardo@mail.com',
    mentorName: 'Bruno Mestanza'
  },
  {
    name: 'Yuri Aresi',
    age: 25,
    class: 15,
    email: 'yuri@mail.com',
    mentorName: 'Bruno Mestanza'
  },
  {
    name: 'Ana Chiamenti',
    age: 20,
    class: 14,
    email: 'ana@mail.com',
    mentorName: 'Leticia Leal'
  }
];
const mentors = [{
  name: "Bruno Mestanza",
  classes: [17, 15]
}]

// Rotas que recebem as requisições do cliente
app.get('/students/:name?', (request, response) => {
  const queryParams = request.query

  if (queryParams.name !== undefined) {
    const studentsWithName = students.filter((student) => {
      return student.name === queryParams.name
    })

    return response.json(studentsWithName)
  } else {
    return response.json(students)
  }
});

app.post('/students', isMentor, (request, response) => {
  const body = request.body
  if (body.name === undefined) {
    return response.status(400).json('Nome não informado!')
  }

  if (body.age === undefined) {
    return response.status(400).json('Idade não informada!')
  }

  if (body.class === undefined) {
    return response.status(400).json('Turma não informada!')
  }

  if (body.email === undefined) {
    return response.status(400).json('Email não informado!')
  }

  const hasStudentWithEmail = students.find((student) => {
    return student.email === body.email
  })

  if (hasStudentWithEmail !== undefined) {
    return response.status(400).json('Email já cadastrado!')
  }

  const student = {
    name: body.name,
    age: body.age,
    class: body.class,
    email: body.email,
    mentorName: body.mentorName
  }

  students.push(student)

  return response.status(201).json('Usuário criado com sucesso.');
});

app.put('/students/:email', (request, response) => {
  const body = request.body
  const params = request.params

  const studentToAlterIndex = students.findIndex((student) => {
    return student.email === params.email
  })

  if (studentToAlterIndex === -1) {
    return response.status(400).json('Email inválido!')
  }

  const student = {
    name: body.name,
    age: body.age,
    class: body.class,
    email: body.email,
    mentorName: body.mentorName
  }

  students[studentToAlterIndex] = student
  
  return response.json('Usuário alterado com sucesso.');
});

app.delete('/students/:email', (request, response) => {
  const params = request.params

  const studentToDeleteIndex = students.findIndex((student) => {
    return student.email === params.email
  })

  if (studentToDeleteIndex === -1) {
    return response.status(400).json('Email inválido!')
  }

  delete students[studentToDeleteIndex]
  
  return response.json('Usuário apagado com sucesso.');
});

app.listen(8080, () => console.log("Servidor iniciado"));
