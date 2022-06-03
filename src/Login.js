import React from "react";
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';

const Login = () => {

    require('./estilos/login.css');

    return ( 
        <div className="Login">
            <div>
            <>
            
               
                </>
                <h2> Login</h2>
                <br/>
                <input placeholder = "Email..."/>
                <br/>
                <input placeholder = "Senha..."/>
                <br/>
                <Button variant="outline-primary">Login</Button>{''}
                <br/>
                <Link to={'/cadastro'}>
                <Button variant="outline-primary">Não possui conta? Cadastrar</Button>{''}
                </Link>
            </div>
        </div>
     );
}
 
export default Login;