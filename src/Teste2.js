import React from "react";

const Teste2 = () => {

    const id = 3;
    const obj = {
        idprodutos : id
    }


    const axios = require('axios').default;

    axios.post('http://localhost:3001/Produto' , obj)
    .then(function (response){

        const produto = response.data
        console.log(produto)

    }
    console.log(response)
    
    )


    return ( 
    <div>
        <p>Teste</p>
    </div> 
    );
}
 
export default Teste2;