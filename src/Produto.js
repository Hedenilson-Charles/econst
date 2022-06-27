import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Produto = () => {

    const { id } = useParams();
    console.log(id);

    require('./estilos/produto.css');

    // INICIO FUNÇÃO PRA MUDAR IMAGEM
        const MudarImagem = (evento) => {
        const elemento = evento.target;
        const srcThumb = elemento.getAttribute('src');
        const srcPrincipal = document.getElementById('imgPrincipal').getAttribute('src');
        elemento.setAttribute('src', srcPrincipal);
        document.getElementById('imgPrincipal').setAttribute('src', srcThumb);  
    }
    //FIM FUNÇAO MUDAR IMAGEM



    //COMEÇANDO CONEXÃO COM O BANCO

    const [produto , imprimeProduto] = useState([]);


    const axios = require('axios').default;

    React.useEffect ( () => {
console.log(id)
        axios.get('http://localhost:3001/produto/'+ id)

        .then(function (response) {

            const dados = response.data;
            
            
            imprimeProduto(dados);
            console.log(produto);
            
    
        })

        .catch(function (error) {
            console.log(error);
        })

    },[])


    return(
        <div className="Produto">

            <p>{}</p>
            


            <div className="Bloco1">

                <div className="BlocoImagem1">

                    <img onClick={(e)=>MudarImagem(e)} alt="Imagem1"  src="https://static.riachuelo.com.br/RCHLO/13174711003/portrait/f29e0008f49f3aede5a8e3a3686faae82f1f024a.jpg?imwidth=400"/>
                    <img onClick={(e)=>MudarImagem(e)}  alt="Imagem2" src="https://static.riachuelo.com.br/RCHLO/13174711003/portrait/254a72bf1aa30d4dc96bf8292b9695bb73470216.jpg?imwidth=70"/>
                    <img onClick={(e)=>MudarImagem(e)} alt="Imagem3" src="https://static.riachuelo.com.br/RCHLO/13174711003/portrait/d76f0fe59d365fd18a77dbd992ed59b4fdc713be.jpg?imwidth=70"/>


                </div>
                
                <div className="BlocoImagem">

                <img id="imgPrincipal" alt="Imagem" src="https://static.riachuelo.com.br/RCHLO/13174711003/portrait/f29e0008f49f3aede5a8e3a3686faae82f1f024a.jpg?imwidth=70"/>

                </div>

            <div className="Geral">
                    <h3> Nome do Produto</h3>
                    <br/>
                    <p>R$00,00</p>
                    <br/>
                    <p> <b>Tamanho:</b> XG</p>
                    <br/>
                    <p> <b>Quantidade:</b> 100 </p>

                    

                <div className="BlocoBotao">
                    <button className="Botão2">Comprar agora</button>
                    <br/>
                    <button className="Botão">Adicionar ao Carrinho</button>
                </div>

            </div>
            </div>

            <div className="Descricao">
                <p>Descrição do produto</p>

            </div>
            


           
        </div>

        










    );
}

export default Produto;