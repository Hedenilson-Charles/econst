import React from "react";
import { Link } from "react-router-dom";
import Cadastro from"./Cadastro.css";



const Cadastro = () => {

    return ( 

         <div>
            <div className="inicio">
                <h2>Cadastro</h2>
                <h3>Insira seus dados abaixo:</h3>
                <br/>
            <div/>

            <div className="Cadastro">
                <input placeholder = "Nome..."/>
                <br/>
                <input placeholder = "CPF"/>
                <br/>
                <input placeholder = "CPF"/>
                <br/>
                <input placeholder = "CPF"/>
                <br/>
                <input placeholder = "CPF"/>
                <input placeholder = "CPF"/>
                <input placeholder = "CPF"/>
                <br/>
                <input placeholder = "CPF"/>
                <br/>
                <input placeholder = "CPF"/>
                <br/>
                <input placeholder = "CPF"/>
                <input placeholder = "CPF"/>
                <br/>

                    <div className="Botões">

                        <button>Confirmar</button>
                        <br/>
                        <button>Já é cliente? Fazer login</button>

                    </div>

                </div>

            </div>

        </div>
     );
}
 
export default Cadastro;                                