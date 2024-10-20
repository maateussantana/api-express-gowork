const express = require('express')
const app = express()

const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  console.log('bati na raiz')
  res.send('Estou na minha API')
})

app.get('/pessoas', (req, res) => {
  console.log('bati em pessoas')
  res.send('Estou na rota pessoas')
})

app.listen(port, () => {
    console.log('Servidor online na porta', port)
})