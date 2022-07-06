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

//GET DE USUARIO 




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



app.post('/cadastro/' , (req,res) =>{

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
    if(error) {
      res.status(409);
      res.send();
      return;
    };
    res.status(200);
    res.send(results);
  })
})


//POST DE PRODUTO ABAIXO
app.post('/cadastraproduto/', (req,res) => {
  const nome = req.body.nome;
  const preco = req.body.preco;
  const imagem = req.body.imagem;
  const quantidade = req.body.quantidade;
  const descricao = req.body.descricao;
  const marca = req.body.marca;

  const query = `INSERT INTO econst.produtos (nome , preco , imagem, quantidade, descricao,marca)
  VALUES ("${nome}", ${preco}, "${imagem}", ${quantidade}, "${descricao}", "${marca}")`

  connection.query(query, function(error,results,fields){
    if (error) throw error;
    res.send(results);
  })
})


//POST DE LOGIN
app.post('/autentica/', (req,res) => {
  const email = req.body.email;
  const senha = req.body.senha;


  const query = `SELECT * FROM econst.clientes WHERE email = "${email}" AND senha = "${senha}"`

  connection.query(query, function(error,results,fields){
    if (error) throw error;
    res.send(results);
  })
})
// Post de pesquisa 

app.post('/pesquisa/', (req,res) => {
  
  const nome = req.body.nome;
  const query = `SELECT * FROM econst.produtos where nome like "%${nome}%"`

  connection.query(query, function(error,results,fields){
    if(error) throw error;
    res.send(results);
  })
})
//.......

//Post de pagina de usuario MEXENDO AQUI
  app.post('/usuario/', (req,res) => {

    const ID = req.body.idusuario;
    const query = `SELECT * FROM econst.clientes WHERE idclientes = "${ID}"`

    connection.query(query, function(error,results,fields){
      if(error) throw error;
      res.send(results)
    })
  })
//
//POST DE CARRINHO 

app.post('/carrinho/', (req, res) => {


  const idproduto = req.body.IDproduto;
  const nprodutos = idproduto.length;
  let montaQuery = `SELECT * FROM econst.produtos WHERE idprodutos in ( ${idproduto[0]}`;
  const finalQuery = `);`

  for(let i = 1; i < nprodutos ; i++){
      const fragmentoQuery = `,${idproduto[i]}`;
      montaQuery = montaQuery + fragmentoQuery;
  }

  const query = montaQuery + finalQuery;

  connection.query(query, function(error,results,fields){
    if (error) {
      res.status(404);
      res.send();
      return;
    }
    res.send(results)
    })
})

//FIM DO POST DE CARRINHO








  

app.listen(port, () => {
  console.log(`A API esta rodando em localhost:${port}`)
})
