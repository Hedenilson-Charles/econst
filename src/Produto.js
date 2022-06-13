import React from "react";

const Produto = () => {

    require('./estilos/produto.css');

    return(
        <div className="Produto">
            <div className="Container">
                <div className="BlocoEsquerdo">
                    <img className="ImagemPrincipal" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                </div>
                <div className="BlocoDireito">
                    <p>Texto exemplo</p>
                </div>
            </div>
        </div>
    );
}

export default Produto;