import React from "react";

const Teste = () => {

  //..........
  const axios = require('axios').default;

  axios.get('http://localhost:3001/')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })


    return(
        <div>
          <h1>Cadastro de Usuario</h1>
          <p>Ultimo Usuario cadastrado:<b> ? </b> </p>

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