import React from "react";
import { Link } from "react-router-dom";
<<<<<<< Updated upstream
=======
import  cadstrofrom  "cadastro.css";
>>>>>>> Stashed changes




const Cadastro = () => {

    require('./estilos/cadastro.css');

    return(

         <div>
            <div className="inicio">

                <h1>Cadastro</h1>
                <h2>Insira seus dados abaixo:</h2>
                <br/>


            </div>

            <div className="Cadastro">
                
                <input placeholder = "Nome..." />
                <br/>
                <input placeholder = "CPF" className="CPF"/>
                <br/>
                <input placeholder = "CEP" className="CEP"/>
                <br/>
                <input placeholder = "CIDADE" className="CIDADE"/>
                <input placeholder = "UF" className="UF"/>
                <input placeholder = "COMPLEMENTO" className="COMPLEMENTO"/>
                <br/>
                <input placeholder = "ENDEREÇO"/>
                <br/>
                <input placeholder = "E-MAIL"/>
                <br/>
                <input type ="password" placeholder = "SENHA" className="SENHA"/>
                <input type = "password" placeholder = "CONFIRMAR SENHA" className="CONFIRMAR"/>
                <br/>

            </div>

                    <div className="Botões">

                        <Link to="/">
                        <button className="Botões3">Confirmar</button>
                        </Link>
                        <br/>
                        <Link to="/login">
                        <button className="Botões2">Já é cliente? Fazer login</button>
                        </Link>

                    </div>

                


        </div>
     )
}
 
export default Cadastro;                                