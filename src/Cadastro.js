import React from "react";
import { Link } from "react-router-dom";




const Cadastro = () => {

    require('./estilos/cadastro.css');

    return(

         <div>
            <div className="inicio">

                <h2>Cadastro</h2>
                <h3>Insira seus dados abaixo:</h3>
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

                        <button className="Botões3">Confirmar</button>
                        <br/>
                        
                        <button className="Botões2">Já é cliente? Fazer login</button>

                    </div>

                


        </div>
     )
}
 
export default Cadastro;                                