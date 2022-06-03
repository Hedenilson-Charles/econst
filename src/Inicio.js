import React from "react";
import { Link } from "react-router-dom";

const Inicio = () => {

    require('./estilos/inicio.css');
    return ( 
        <div className="Inicio">
            <div className="CardProduto">

            <Link className="Link" to={'/produto'}>
                <p>Texto Exemplo</p>
                <p>Preço Qualquer</p>
                <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
            </Link>

            </div>

            <div className="CardProduto">

            <Link className="Link" to={'/produto'}>
                <p>Texto Exemplo</p>
                <p>Preço Qualquer</p>
                <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
            </Link>
            
            </div>

            <div className="CardProduto">

            <Link className="Link" to={'/produto'}>
                <p>Texto Exemplo</p>
                <p>Preço Qualquer</p>
                <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
            </Link>

            </div>
            
        </div>
     );
}
 
export default Inicio;