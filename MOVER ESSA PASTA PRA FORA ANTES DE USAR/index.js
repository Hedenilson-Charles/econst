const express = require('express')
const app = express()
// Define uma porta
const port = 3001


//Especifica pro express que as requisiçoes sao em formato JSON
app.use(express.json());

app.use(function(req,res,next) {
  res.header("Access-Control-Allow-Origin","*");
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
     
    //Encerra a conexão
    
})

app.post('/', (req, res) => {
    connection.connect();
 
    //Codigo abaixo insere um novo cliente na tabela clientes usando INSERT e VALUE 
    connection.query('INSERT INTO econst.clientes (nome, endereco, cidade, cep, complemento, uf , cpf ) VALUES ("Fulano","Rua X", "Cidade X", "ugdsugsd","111222", NULL,"SP","112233","1000-01-01","fahdbfgds@gmail.com");', function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    });
     
    connection.end();
})


//Rota de GET pra pagina de usuario
app.get('/usuario', (req, res) => {
    res.send('<h1>Esta é a pagina de usuario</h1>')
  })


  // Codigo abaixo posta um usuario novo pelo body
  
  app.post('/cadastro', (req, res) => {

  
    //Variaveis de requisição de dados ao usuario
    const nome = req.body.nome;
    const endereco = req.body.endereco;
    const cidade = red.body.cidade;
    const uf = req.body.uf;
    const cpf = req.body.cpf;
    const email = req.body.email;
    const cep = req.body.cep;
    const complemento = req.body.complemento;
    const senha = req.body.senha;

    //Variavel pra imbutir a query a ser executada no banco
    const query = `INSERT INTO econst.clientes 
    (nome, endereco, cidade, uf, cpf, email, cep, complemento, senha) 
    VALUES 
    ( "${nome}" , "${endereco}", "${cidade}", "${uf}", "${cpf}", "${email}", "${cep}","${complemento}", "${senha}" );
    `;


 
    //Codigo abaixo insere um novo usuario na tabela usuarios usando INSERT e VALUE 
    connection.query( query , function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    });
     
})

app.listen(port, () => {
  console.log(`A API esta rodando em localhost:${port}`)
})