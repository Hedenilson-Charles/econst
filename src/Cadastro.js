import React from "react";
import { Link } from "react-router-dom";




const Cadastro = () => {

    require('./estilos/cadastro.css');
    


    const  [Visibilidade, MudaVisibilidade] = React.useState('Invisivel');

    const Formulario = () => {

        const nome = document.getElementById('nome').value;
        const cpf = document.getElementById('cpf').value;
        const cep = document.getElementById('cep').value;
        const cidade = document.getElementById('cidade').value;
        const uf = document.getElementById('uf').value;
        const complemento = document.getElementById('complemento').value;
        const endereco = document.getElementById('endereco').value;
        const email = document.getElementById('email').value;
        const senha1 = document.getElementById('senha1').value;
        const senha2 = document.getElementById('senha2').value;

        if (senha1 == senha2) {
            //Objeto que vai ser mandado para o axios
            const obj = {
                nome: nome,
                cpf: cpf,
                cep: cep,
                cidade: cidade,
                uf: uf,
                complemento: complemento,
                endereco: endereco,
                email: email,
                senha: senha1
            }

            const axios = require('axios').default;


        }
        
    }

    


    return(

         <div>

            <div id="invisivel" className={Visibilidade}>
                <div className="Modal">

                    <h2>Cadastro realizado com sucesso!</h2>
                    <Link to='/'>
                    <button>Começar a comprar</button>
                    </Link>

                </div>
            </div>



        <div className="Visivel">
            
                <div className="inicio">

                    <h1>Cadastro</h1>
                    <h2>Insira seus dados abaixo:</h2>
                    <br/>
                </div>

                <div>

                    <form onSubmit={(e)=> Formulario(e)} className="Cadastro">
                        
                        <input id="name" required placeholder = "Nome..." />
                        <br/>
                        <input id="cpf" type='number' required minLength={11} placeholder = "CPF" className="CPF"/>
                        <br/>
                        <input id="cep" type='number' required minLength={11} placeholder = "CEP" className="CEP"/>
                        <br/>
                        <input id="cidade" required placeholder = "CIDADE" className="CIDADE"/>
                        <input id="uf" required placeholder = "UF" className="UF"/>
                        <input id="complemento" placeholder = "COMPLEMENTO" className="COMPLEMENTO"/>
                        <br/>
                        <input id="endereco" required placeholder = "ENDEREÇO"/>
                        <br/>
                        <input id="email" required placeholder = "E-MAIL"/>
                        <br/>
                        <input id="senha1" required minLength={6} type ="password" placeholder = "SENHA" className="SENHA"/>
                        <input id="senha2" required minLength={6} type = "password" placeholder = "CONFIRMAR SENHA" className="CONFIRMAR"/>
                        <br/>

                            <button className="Botões3">Confirmar</button>
                            <div className="Botões">
    
                            <br/>
                            <Link to="/login">
                            <button className="Botões2">Já é cliente? Fazer login</button>
                            </Link>

                        </div>
                    </form>

                       
                </div>
            </div>
        </div>
     )
    
}
 
export default Cadastro;                                