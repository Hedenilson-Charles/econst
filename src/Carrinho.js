import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Carrinho = () => {

    const [produtos, alteraProdutos] = React.useState([]);
   
    require('./estilos/carrinho.css');

    useEffect(()=> {
        let nprodutos = localStorage.length;
        

        const IDs = [];

        for (let i = 0; i < nprodutos; i++) {
            const item = Object.keys(localStorage)[i]
            if (item == "IDusuario" || item == "Pesquisa") {//Linha modificada aqui
                continue
            }
            const idproduto = parseInt(item.split("produto")[1]);
            IDs.push(idproduto);

        }

        buscaProdutos(IDs);
        console.log(IDs);
    }, [] )

    // Esse useEffect é chamando quando a variável PRODUTOS é alterada em qualquer momento

    const buscaProdutos = ( IDs ) => {

        const axios = require('axios').default;
        

        const obj = {
            IDproduto: IDs
        }

        axios.post('http://localhost:3001/carrinho/' , obj )
        .then(function(response){
            const dados = response.data
            console.log(dados)
            alteraProdutos(dados);

        })
        .catch(function(error){
            console.log(error)
        })
    }
    //...........


    const [quantidade , alteraQuantidade] = React.useState(0);
    

    return(


        
            <div className='Carrinho'>
                {(produtos == 0 ? "Carregando...": 
                
                produtos.map(u => {
                    return(
                        <div>
                            <p>{u.nome}</p>
                        </div>
                    )
                })
                
                
                
                
                
                )}


                <div className="Guia">
                <p>Produto</p>

                <div className='Guia2'>
                <p>Preço</p>
                <p>Qtd.</p>
                <hr/>
                </div>

                
            </div>

        <Link className="Link" to={'/produto'}></Link>

        <div className="Elementos">
            <img alt='Compras' src='https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg'/>

            <Link className="Link" to={'/produto'}> 

            <div className='Descrição'>
                
            <p>Descrição para o rpoduto de teste XG blá blá blá blá e é isso, não sei o que estou fazendo. Obrigada!</p>
            
            </div>
            </Link>

            <div className='preco'>
                <p>R$00,00</p>
            </div>

            <div className="quantidade">

            <p> Quantidade de produto
                <br/> 
                <button onClick={() => alteraQuantidade( quantidade - 1)}><b>-</b></button> {quantidade} <button onClick={()=> alteraQuantidade( quantidade + 1)}><b>+</b></button></p>
            </div>

            <div className='remover'>
               <button>Remover</button>
            </div>


        </div>
       </div> 
    );
}

export default Carrinho;