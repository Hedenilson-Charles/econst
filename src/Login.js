import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

    require('./estilos/login.css');

    return ( 
        <div className="Login">
            <div>
                <p>Tela de login</p>
                <h2> Login</h2>
                <br/>
                <input placeholder = "Email..."/>
                <br/>
                <input placeholder = "Senha..."/>
                <br/>
                <button>Login</button>
                <br/>
                <button>Não possui conta? Cadastrar</button>
            </div>
        </div>
     );
}
 
export default Login;