import React from "react";

const Produto = () => {

    require('./estilos/produto.css');

    return(
        <div className="Produto">

            <div className="BlocoImagem1">

                <img alt="Imagem"  src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                <img alt="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                <img alt="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>


            </div>
            
            <div className="BlocoImagem">

            <img alt="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>

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