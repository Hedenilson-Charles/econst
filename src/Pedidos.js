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
 

        <div className="Informacao">
           
            <p>Pedido</p>
            <p>Informações do cliente</p>
        </div>


<div className="Elementos">
    <img alt='Compras' src='https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg'/>


    <div className='Descrição'>
        
    <p>Descrição para o produto de teste XG blá blá blá blá e é isso, não sei o que estou fazendo. Obrigada!</p>

    
    </div>

    <div>
      <p> Informações do banco de dados</p>      
    </div>

</div>

    <div>
            
    </div>

        




    <form>
           
        <div id="container-a"></div><div id="container-b"></div>
             
        <div id="container-a"></div><div id="container-b"></div>
           
        <div id="container-a"></div><div id="container-b"></div>
            
        <div id="container-a"></div><div id="container-b"></div>
            
        <div id="container-a"></div><div id="container-b"></div>
    </form>  
</div>

);}
 
export default Pedidos;