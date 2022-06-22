import React from "react";
import { Link } from "react-router-dom";


const Login = () => {

    require('./estilos/login.css');

    return ( 
        <div className="Login">

            <h1>Login</h1>
            <h2>Insira seus dados abaixo</h2>
            <div className="ContainerLogin">
            
            <form>
                <input type='email' placeholder="Insira seu e-mail..."/>
                <input type='password' placeholder="Insira sua senha..."/>
            </form>


            </div>
            <div className="Botoes">
                <Link to='/'>
                    <button className="Botao1">Entrar</button>
                </Link>
                <Link to='/cadastro'>
                    <button className="Botao2">Cadastre-se</button>
                </Link>
            </div>
        </div>
     );
}
 
export default Login; 