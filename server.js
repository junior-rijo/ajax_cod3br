const bodyParser = require('body-parser')//responsavel por interpretar os dados e deixar pronto para serem manipulados
const express = require('express')
const app = express()//estanciando 

app.use(express.static('.'))//vai prover os arquivos staticos a partir do app
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())//se vier um json transforma o mesmo em objetos


app.get('/teste', (req, res) => res.send('OK'))
app.listen(8080, () => console.log('Executando'))
