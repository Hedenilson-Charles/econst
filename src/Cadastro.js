import React from "react";
import { Link } from "react-router-dom";




const Cadastro = () => {

    require('./estilos/cadastro.css');

    const [ rota , mudarota] = React.useState('/');

    //Função abaixo pega informações do input

    const Formulario = (e) => {
        e.preventDefault();

        //Tratativa de dados abaixo
            const nome = document.getElementById('name').value;

            //Tratamento do cpf
            const cpfpuro = document.getElementById('cpf').value;
            const cpf = cpfpuro.replace(/[^0-9]/g, '')

            //Tratamento do cep
            const ceppuro = document.getElementById('cep').value;
            const cep = ceppuro.replace(/[^0-9]/g, '')

            const endereco = document.getElementById('endereco').value;
            const uf = document.getElementById('uf').value;
            const cidade = document.getElementById('cidade').value;
            const complemento = document.getElementById('complemento').value;
            const email = document.getElementById('email').value;
            const senha1 = document.getElementById('senha1').value;
            const senha2 = document.getElementById('senha2').value;

            if (senha1 !== senha2) {
                alert('As senhas não conferem!')
            }

return;

}


    



    return(

         <div>
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
                    <input id="senha1" required type ="password" placeholder = "SENHA" className="SENHA"/>
                    <input id="senha2" required type = "password" placeholder = "CONFIRMAR SENHA" className="CONFIRMAR"/>
                    <br/>

                        <button className="Botões3">Confirmar</button>
                </form>

                    <div className="Botões">

                        
                    
                        
                        
                        <br/>
                        <Link to="/login">
                        <button className="Botões2">Já é cliente? Fazer login</button>
                        </Link>

                    </div>
        </div>
        </div>
     )
    }

 
export default Cadastro;                                