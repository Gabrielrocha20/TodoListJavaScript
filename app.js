const { response } = require('express')
const express = require('express')

const app = express()

app.use(express.json())
const log = (req, res, next) =>{
    console.log(req.body)
    console.log(`Data: ${Date.now()}`)
    next()
}

app.use(log)

app.get('/', (req, res) => {
    res.send('<h1>Minha lista de tarefas</h1>')
})

app.get('/js', (req, res) => {
    console.log(req.body)
    res.json({title: 'Tarefa X', quantidade:5})
})

app.listen(3000, ()=> {
    console.log('Servidor iniciado')
})