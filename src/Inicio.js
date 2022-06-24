import React from "react";
import { Link } from "react-router-dom";
import { Provedor } from "./ContextoProduto";
import { Contexto } from "./ContextoProduto";




const Inicio = () => {

    //guardar o produto no localstorage

    const [idprodutos , pegaID]= React.useState(0);
    //INICIO DA CONEXÃO COM BANCO

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

    //FIM DA CONEXÃO COM BANCO

    require('./estilos/inicio.css');
    return ( 
        <div className="Inicio">



            <div className="Container">
           {  
                (produtos == 0? "Carregando..." : 
                        produtos.map( u => 
                            {

                            
                            
                                const dinheiro = u.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                            return(

                                
                                <div onClick={()=> pegaID(localStorage.setItem("idProduto" , u.idprodutos))} className="CardProduto">
                                
                                    <Link className="Link" to={`/produto/${u.idprodutos}`}>
                                    <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                                        <p className="textoCard">{u.nome}</p>
                                        <p id="Descricao" className="animate__animated animate__zoomIn animate__fast">{u.descricao}</p>
                                        <p className="preco">{dinheiro}</p>
                                    </Link>

                            </div>
                                
                            )})
                )
            }       
            </div>


        </div>
     );
}
 
export default Inicio;