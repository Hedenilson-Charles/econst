import React from "react";
import { Link } from "react-router-dom";


const Login = () => {

    require('./estilos/login.css');

    return ( 
        <div className="Login">

            <h1>Login</h1>
            <div className="ContainerLogin">
            
            <form>
                <input placeholder="Insira seu e-mail..."/>
                <input placeholder="Insira sua senha..."/>
            </form>


            </div>
        </div>
     );
}
 
export default Login; 