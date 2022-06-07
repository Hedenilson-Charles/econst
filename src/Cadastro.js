import React from "react";
import { Link } from "react-router-dom";

const Cadastro = () => {
    return ( 
        <div className="Login">
        <div>

            <h2> Cadastrar</h2>
            <h3> Insira seu dados:</h3>
            <br/>
            <input placeholder = "Nome..."/>
            <br/>
            <input placeholder = "CPF"/>
            <br/>
            <input placeholder = "CEP"/>
            <br/>
            

        </div>
    </div>
     );
}
 
export default Cadastro;