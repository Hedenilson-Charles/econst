import React from "react";
import { Link } from "react-router-dom";


const Login = () => {

    require('./estilos/login.css');

    return ( 
        <div className="Login">
            <div>
                <h2> Login</h2>
                <input placeholder = "Insira seu e-mail..."/>
                <br/>
                <input type="password" placeholder = "Insira sua senha..."/>
                <br/>
                <Link to="/">
                <button>Login</button>{''}
                </Link>
                <br/>

                <Link to={'/cadastro'}>
                <button>Não possui conta? Cadastrar</button>{''}
                </Link>

            </div>
        </div>
     );
}
 
export default Login;