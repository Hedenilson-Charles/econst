import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

    require('./estilos/login.css');

    return ( 
        <div>
            <p>Tela de login</p>
            <h2> Login</h2>
            <input placeholder = "Email..."/>
            <input placeholder = "Senha..."/>
            <button>Login</button>
            <button>Não possui conta? Cadastrar</button>
        </div>
     );
}
 
export default Login;