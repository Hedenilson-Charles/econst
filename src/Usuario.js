import React from "react";
import { Link } from "react-router-dom";

const Usuario = () => {

    require('./estilos/usuario.css');

    return(
        <div className="Usuario">


            {/* Abaixo bloco com layout pro usuario padrão */}
            <div className="BlocoEsquerdo">
                <img src="https://i.imgur.com/HAA9XbR.png"/>
                <p><b>Endereço:</b> Rua Fulano de X número X</p>
                <p><b>E-mail:</b> fulanodasilva@gmail.com</p>
                <p><b>CPF:</b> XXX-XXX-XXXX </p>
            </div>
            <div className="BlocoDireito">
                <img src="https://cdn.onlinewebfonts.com/svg/img_184513.png"/>
                <p>Fulano da Silva</p>
            </div>
         
        </div>
    );
}

export default Usuario;