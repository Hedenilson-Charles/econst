import React from "react";
import { Link } from "react-router-dom";

const Cadastro = () => {
    return ( 

         <div className="Cadastro">
            <div>
                <h2>Cadastro</h2>
                <h3>Insira seus dados abaixo:</h3>
                <br/>
                <input placeholder = "Nome..."/>
                <br/>
                <input placeholder = "CPF"/>
                <br/>
            </div>
        </div>
     );
}
 
export default Cadastro;                                