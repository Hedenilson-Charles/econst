const express = require('express');

const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
// Define uma porta
const port = 3001


//Especifica pro express que as requisiçoes sao em formato JSON
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Conexao do Mysql abaixo (Mudar os dados abaixo muda o banco alvo)
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'econst321',
  password : 'tgcitbitw123',
  database : 'econst',
  port     : 3306
});



//Rota de GET pra pagina inicial
app.get('/', (req, res) => {
 
    //Envia um codigo query pra ser executado no banco
    connection.query('SELECT * FROM econst.produtos', function (error, results, fields) {
      if (error) throw error;
    //Retorna algo da requisição
      res.send(results);
    });
       
})


// GET DA TELA DE PRODUTO ABAIXO
app.get('/produto/:idproduto', (req, res) => {

  const idproduto = req.params.idproduto;


  connection.query(`SELECT * FROM econst.produtos WHERE idprodutos = "${idproduto}"`, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  })
}) 
//


//POST DE CADASTRO



app.post('/cadastro' , (req,res) =>{

  const nome = req.body.nome;
  const endereco = req.body.endereco;
  const cidade = req.body.cidade;
  const uf = req.body.uf;
  const cpf = req.body.cpf;
  const email = req.body.email;
  const cep = req.body.cep;
  const complemento = req.body.complemento;
  const senha = req.body.senha;

  const query = `INSERT INTO econst.clientes (nome, endereco, cidade, uf, cpf, email, cep, complemento, senha) 
  VALUES ("${nome}" , "${endereco}", "${cidade}", "${uf}", "${cpf}", "${email}", "${cep}","${complemento}", "${senha}")`
  connection.query(query, function(error,results,fields){
    if(error) throw error;
    res.send(results);
  })
})






  

app.listen(port, () => {
  console.log(`A API esta rodando em localhost:${port}`)
})
