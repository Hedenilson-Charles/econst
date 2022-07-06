import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

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

    //FINALIZAR COMPRA

    const FinalizarCompra = () => {
        const usuario = localStorage.getItem("IDusuario");
        if (usuario > 0) {
            let nprodutos = localStorage.length;
        const IDs = [];

        for (let i = nprodutos; i > -1; i--) {
            const item = Object.keys(localStorage)[i]
            if (item == "IDusuario" || item == "Pesquisa") {//Linha modificada aqui
                continue
            }
            console.log( item)
            localStorage.removeItem(item)

            swal({
                title: "Compra Finalizada!",
                icon: "success",
                button: false,
                timer: 1200
              })
              .then(terminaLogin => {
                window.location.href='/';  
              });
        }
        } else {

            swal({
                title: "Ops!",
                text: `É preciso realizar o login primeiro!`,
                icon: "warning",
                button: false,
                timer: 1000
              })
              .then(terminaLogin => {
                window.location.href='/login';  
              });

        }
    }

    //REMOVER ITEM 

    const RemoveItem = (id) => {
        localStorage.removeItem("produto" + id)
        window.location.href='/carrinho';
    }

    //Envia pedido

    

    return(


        
            <div className='Carrinho'>

                {(produtos == 0? "Nada para ver aqui!" : <div className='Guia'> <p>Produto</p> <div className='Guia2'> <p>Preço</p> </div></div>)}

                {(produtos == 0 ? "": 
    
                produtos.map(u => {

                    const dinheiro = u.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                    return(
                        <div>
                            


        <div className="Elementos">
            <img className='imagem' alt='Compras' src={u.imagem}/>

            <Link className="Link" to={'/produto'}> 

            <div className='Descricao'>
                
            <p>{u.nome}</p>
            
            </div>
            </Link>

            <div className='preco'>
                <p>{dinheiro}</p>
            </div>

            

            <div className='remover'>
               <button onClick={()=> RemoveItem(u.idprodutos)}>Remover</button>
            </div>


        </div>
                        </div>
                    )
                }) 
                
                )}
                {(produtos == 0 ? "" : <div className='remover'><button onClick={()=> FinalizarCompra()}>Finalizar Compra</button></div>)}

                

                
       </div> 
    );
}

export default Carrinho;