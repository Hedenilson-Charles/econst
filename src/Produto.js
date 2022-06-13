import React from "react";

const Produto = () => {

    require('./estilos/produto.css');

    return(
        <div className="informacao">

        <div>
            <h3> Nome do Produto</h3>
            <br/>
            <p>R$00,00</p>
            <br/>
            <p> <b>Tamanho:</b> XG</p>
            <br/>
            <p> <b>Quantidade:</b> 100 </p>

            <div>

            <button>Comprar agora</button>
            <br/>
            <button>Adicionar ao Carrinho</button>

            </div>


        </div>


        </div>










    );
}

export default Produto;