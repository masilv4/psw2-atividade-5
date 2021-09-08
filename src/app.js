const express = require('express')

const { getAllStudents } = require('./routers/student-router')
const { convertRealToDollar } = require('./routers/currency-router')

const app = express()

const PORT = 3000

app.get('/alunos/todos', getAllStudents)

app.get('/moeda/:valor_real', convertRealToDollar)

app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`))