import React from "react";


const Pedidos = () => {
    
    const [produtos, imprimeProdutos] = React.useState([]);
    const axios = require('axios').default;

    React.useEffect ( () => {

        axios.get('http://localhost:3001/')

        .then(function (response) {

            const dados = response.data;
            
            
            imprimeProdutos(dados);
        
      
        })

        .catch(function (error) {
            console.log(error);
        })

    }, [])


    require('./estilos/pedidos.css');
    
    return ( 
        
     <div classname="pedidos">

         <p>Tela de pedidos</p>

    <form>
       <h2>Compars recentes</h2>
           
        <div id="container-a"></div><div id="container-b"></div>
             
        <div id="container-a"></div><div id="container-b"></div>
           
        <div id="container-a"></div><div id="container-b"></div>
            
        <div id="container-a"></div><div id="container-b"></div>
            
        <div id="container-a"></div><div id="container-b"></div>
    </form>  
</div>

);}
 
export default Pedidos;