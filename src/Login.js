import React from "react";
import { Link} from "react-router-dom";
import swal from "sweetalert";

const Login = () => {

    require('./estilos/login.css');

    //const [usuario, mudaUsuario] = React.useState(0); //Trechos possivelmente inuteis
    
    //const MudaID = () => {
    //    localStorage.setItem("IDusuario" , usuario);
    //}

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


                    swal({
                        title: "Login realizado com sucesso!",
                        text: `Olá ${dados[0].nome}`,
                        icon: "success",
                        button: false,
                        timer: 800
                      })
                      .then(terminaLogin => {
                        localStorage.setItem("IDusuario",dados[0].idclientes);
                        window.location.href='/';    
                      });


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

                <div className="Botoes"> 
                    <Link to='/cadastro'>
                        <button className="Botao2">Cadastre-se</button>
                    </Link>
                </div>
                
            </div>
            
        </div>
     );
}
 
export default Login; 