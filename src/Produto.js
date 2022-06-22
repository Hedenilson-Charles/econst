import React from "react";

const Produto = () => {

    require('./estilos/produto.css');

    return(
        <div className="Produto">

            <div className="BlocoImagem1">

                <img onClick={'MudarImagem'} alt="Imagem"  src="https://static.riachuelo.com.br/RCHLO/13174711003/portrait/f29e0008f49f3aede5a8e3a3686faae82f1f024a.jpg?imwidth=400"/>
                <img onClick={'MudarImagem1'}  alt="Imagem" src="https://static.riachuelo.com.br/RCHLO/13174711003/portrait/254a72bf1aa30d4dc96bf8292b9695bb73470216.jpg?imwidth=70"/>
                <img onClick={'MudarImagem2 '} alt="Imagem" src="https://static.riachuelo.com.br/RCHLO/13174711003/portrait/d76f0fe59d365fd18a77dbd992ed59b4fdc713be.jpg?imwidth=70"/>


            </div>
            
            <div className="BlocoImagem">

            <img alt="Imagem" src="https://static.riachuelo.com.br/RCHLO/13174711003/portrait/f29e0008f49f3aede5a8e3a3686faae82f1f024a.jpg?imwidth=70"/>

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

        










    );
}

export default Produto;