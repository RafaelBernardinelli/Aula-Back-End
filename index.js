const express = require('express')

const server = express()
const port = 8080

//mostra no navegador
server.get('/health', (req, res) => {
    res.send('server is running')
})


//mostra no postman
server.post('/aluno', (req, res) => {
    res.send('Creating students')
})

server.put('/id', (req, res) => {
    res.send('Updating student with id 2')
})

server.delete('/id', (req, res) => {
    res.send('Removing student with id 2')
})

server.get('/listar-alunos', (req, res) => {
    res.send('listing students')
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

