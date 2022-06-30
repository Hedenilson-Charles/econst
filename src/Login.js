import React from "react";
import { Link, Navigate } from "react-router-dom";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Login = () => {

    require('./estilos/login.css');

    const navigate = useNavigate();

    const [usuario, mudaUsuario] = React.useState(0);
    
    const MudaID = () => {
        localStorage.setItem("IDusuario" , usuario);
    }

    

    const VerificaLogin = (e) => {

        e.preventDefault();


        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        const obj = {
            email: email,
            senha: senha
        }

        const axios = require('axios').default;

            axios.post('http://localhost:3001/autentica/', obj)
            .then(function(response){
                const dados = response.data;
                console.log(dados);
                if ( response.data == 0) {
                    alert('E-mail ou senha incorretos!')
                } else {
                    swal(`Bem vindo de volta ` + dados[0].nome);
                    localStorage.setItem("IDusuario",dados[0].idclientes);
                    window.location.href='/';
                }
            })

            .catch (function(error){
                console.log(error);
            })


    }

    return ( 
        <div className="Login">

            <h1>Login</h1>
            <h2>Insira seus dados abaixo</h2>

            <div className="ContainerLogin">
            
                <form onSubmit={(e)=> VerificaLogin(e)}>
                    <input id="email" required type='email' placeholder="Insira seu e-mail..."/>
                    <input id="senha" required type='password' placeholder="Insira sua senha..."/>
                    <div className="Botoes">
                        <button className="Botao1">Entrar</button>
                    </div>
                </form>

            </div>


            <div className="Botoes">
                
                
                <Link to='/cadastro'>
                    <button className="Botao2">Cadastre-se</button>
                </Link>
            </div>
        </div>
     );
}
 
export default Login; 