const express = require('express')
const app = express()
const port = 3000
const usuarios = require('./usuarios.json')
const books = require('./usuarios.json')

//middleware
app.all("*", (req, res, next) => {
    next()
})
//routes
app.get('/', (req, res) => {
    res.send('hello ma friend!')
})

app.get('/usuarios', (req, res) => {
    res.send(usuarios)
})
app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id
    res.send(usuarios.filter(usuario => usuario.id == id))
})

app.get('/usuarios/:nome', (req, res) => {
    const nomeUsu = req.params.nome
    res.send(usuarios.filter(usuario => usuario.nome == nomeUsu))
})

// app.get('/books',(req,res)=>{
//     const books = usuarios.find(usuario => usuario.livros == books)
//     res.send(books)
// })

//servidor
app.listen(port, function () {
    console.log(`App rodando na porta ${port}`)
})