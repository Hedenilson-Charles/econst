import React from "react";
import { Link } from "react-router-dom";




const Cadastro = () => {

    require('./estilos/cadastro.css');

    const [ rota , mudarota] = React.useState('/cadastro');

    //Função abaixo pega informações do input

    const Formulario = () => {

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

            if ( senha1 == "") {
                alert("Insira uma senha!")
                mudarota('/');
            } else {
                if (senha1 !== senha2) {
                    alert('As senhas não conferem!')
                    mudarota('/')
                } else {
                    if (cpf == "") { //Tratamento do CPF
                        alert('Insira um CPF valido')
                        mudarota('/');
                    } else if ( cpf.length < 11) {
                        alert('Insira um CPF valido')
                        mudarota('/');
                    } else if ( cpf.length > 11 ) {
                        alert('Insira um CPF valido')
                        mudarota('/');
                    } else { // Tratamento do CEP
                        if (cep == "") {
                            alert('Insira um CEP valido')
                            mudarota('/');
                        } else if (cep.length < 8) {
                            alert('Insira um CEP valido')
                            mudarota('/');
                        } else if (cep.length > 8) {
                            alert('Insira um CEP valido')
                            mudarota('/');
                        } else { //Verifica se os demais campos foram preenchidos (complemento não é obrigatorio)
                            if (uf == "" || cidade == "" || email == "" || senha1 == "" || nome == "") {
                                alert("Por favor preencha todos os campos obrigatorios!")
                                mudarota('/');
                            } else {
                                // POST PRO BANCO USANDO AXIOS A PARTIR DAQUI

                                const obj = { // OBJETO PRA PASSAR PELO AXIOS
                                    nome: nome,
                                    endereco: endereco,
                                    cpf: cpf,
                                    cep: cep,
                                    uf: uf,
                                    cidade: cidade,
                                    complemento: complemento,
                                    email: email,
                                    senha: senha1
                                }

                                mudarota('/');

                                const axios = require('axios').default;
                                
                                    axios.post('http://localhost:3001/cadastro', obj)
                                    .then(function(response){

                                        console.log(response);
                                    })

                                    .catch(function(error){
                                        console.log(error);
                                    })
                                  //FIM DO AXIOS
                            }
                        }
                    }
                }
            }
    }

    //

    



    return(

         <div>
            <div className="inicio">

                <h1>Cadastro</h1>
                <h2>Insira seus dados abaixo:</h2>
                <br/>
            </div>

            <div>

                <div className="Cadastro">
                    
                    <input id="name" placeholder = "Nome..." />
                    <br/>
                    <input id="cpf" placeholder = "CPF" className="CPF"/>
                    <br/>
                    <input id="cep" placeholder = "CEP" className="CEP"/>
                    <br/>
                    <input id="cidade" placeholder = "CIDADE" className="CIDADE"/>
                    <input id="uf" placeholder = "UF" className="UF"/>
                    <input id="complemento" placeholder = "COMPLEMENTO" className="COMPLEMENTO"/>
                    <br/>
                    <input id="endereco" placeholder = "ENDEREÇO"/>
                    <br/>
                    <input id="email" placeholder = "E-MAIL"/>
                    <br/>
                    <input id="senha1" type ="password" placeholder = "SENHA" className="SENHA"/>
                    <input id="senha2" type = "password" placeholder = "CONFIRMAR SENHA" className="CONFIRMAR"/>
                    <br/>

                </div>

                    <div className="Botões">

                        <Link to={rota}>
                        <button  onClick={()=> Formulario()} className="Botões3">Confirmar</button>
                        </Link>
                        
                        
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