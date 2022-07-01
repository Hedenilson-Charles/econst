import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

 

const Produto = (props ) => {
    
        
    const { id } = useParams();
   /*

    require('./estilos/produto.css');

    const adicionaCarrinho = () => {
        const carrinho = props.carrinho 
        
        carrinho.push (id)
        props.alteraCarrinho (carrinho )


    }*/

    // INICIO FUNÇÃO PRA MUDAR IMAGEM
        const MudarImagem = (evento) => {
        const elemento = evento.target;
        const srcThumb = elemento.getAttribute('src');
        const srcPrincipal = document.getElementById('imgPrincipal').getAttribute('src');
        elemento.setAttribute('src', srcPrincipal);
        document.getElementById('imgPrincipal').setAttribute('src', srcThumb);  

    }
    //FIM FUNÇAO MUDAR IMAGEM

    //Funçao do carrinho abaixo



    const AdicionaCarrinho = () => {
        let contador = localStorage.length;
        if ( localStorage.getItem("IDusuario")) {
            contador--;
        }

        const quantidade = document.getElementById('quantidade').value;
        localStorage.setItem(`produto${id}`, quantidade );
    }





    //



    //COMEÇANDO CONEXÃO COM O BANCO

    const [produto , pegaProduto] = useState([]);


    const axios = require('axios').default;



    React.useEffect ( () => {


        axios.get('http://localhost:3001/produto/'+ id)

        .then(function (response) {

            const dados = response.data;
            
            
            pegaProduto(dados);
    
        })

        .catch(function (error) {
            console.log(error);
        })

    },[])

    const [quantidade , alteraQuantidade] = React.useState(0);





    return(
        <div className="Produto">

            {produto == 0? "Carregando...":  

            <div className="Produto">
                <div className="Bloco1">

                    <div className="BlocoImagem1">

                        <img onClick={(e)=>MudarImagem(e)} alt="Imagem1"  src="https://static.riachuelo.com.br/RCHLO/13174711003/portrait/f29e0008f49f3aede5a8e3a3686faae82f1f024a.jpg?imwidth=400"/>
                        <img onClick={(e)=>MudarImagem(e)}  alt="Imagem2" src="https://static.riachuelo.com.br/RCHLO/13174711003/portrait/254a72bf1aa30d4dc96bf8292b9695bb73470216.jpg?imwidth=70"/>
                        <img onClick={(e)=>MudarImagem(e)} alt="Imagem3" src="https://static.riachuelo.com.br/RCHLO/13174711003/portrait/d76f0fe59d365fd18a77dbd992ed59b4fdc713be.jpg?imwidth=70"/>


                    </div>
                    
                    <div className="BlocoImagem">

                    <img id="imgPrincipal" alt="Imagem" src="https://static.riachuelo.com.br/RCHLO/13174711003/portrait/f29e0008f49f3aede5a8e3a3686faae82f1f024a.jpg?imwidth=70"/>

                    </div>

                <form onSubmit={() =>AdicionaCarrinho()} className="Geral">
                        <h3> {produto[0].nome}</h3>
                        <br/>
                        <p>R${produto[0].preco}</p>
                        <br/>
                        <input id="quantidade" min={1} type="number"/>

                        

                    <div className="BlocoBotao">
                        <button className="Botão2">Comprar agora</button>
                        <br/>
                        <button className="Botão">Adicionar ao Carrinho</button>
                    </div>

                </form>
                </div>

                <div className="Descricao">
                    <p>{produto[0].descricao}</p>

                </div>
            </div>
            }
            
        </div>

    
    );
}

export default Produto;