import React from "react";

const Teste = () => {

  const[usuarios, alteraUsuarios] = React.useState([]);

  //Variavek axios sendo requisitada
  const axios = require('axios').default;


  //Executa o efeito uma unica vez
  React.useEffect( () => {

    //Requisição de GET vindo do localhost 3001
  axios.get('http://localhost:3001/')
  //Funçao assincrona
    .then(function (response) {

      //Pega da resposta uma parte e coloca na variavel dados
      const dados = response.data;
      
      alteraUsuarios(dados);

    })
  //ocorre em caso de erro na conexão
    .catch(function (error) {
      console.log(error);
    })

  }, [])


  


    return(
        <div>
          <h1>Cadastro de Usuario</h1>
          <p>Ultimo Usuario cadastrado:<b>  {(usuarios == 0 ?"Carregando...": usuarios[0].nome)} </b> </p>

          <form>
            <input placeholder="Digite seu nome..."/>
            <br/>
            <br/>
            <input placeholder="Digite seu email..."/>
            <br/>
            <br/>
            <button>Salvar</button>
          </form>
            

        </div>
    );
}

export default Teste;