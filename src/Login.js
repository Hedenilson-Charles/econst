import React from "react";
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';

const Login = () => {

    require('./estilos/login.css');

    return ( 
        <div className="Login">
            <div>
                <h2> Login</h2>
                <br/>
                <input placeholder = "Insira seu e-mail..."/>
                <br/>
                <input placeholder = "Insira sua senha..."/>
                <br/>
                <Button variant="outline-primary">Login</Button>{''}
                <br/>

                <Button variant="outline-primary">Não possui conta? Cadastro</Button>{''}
                <Link to={'/cadastro'}>
                <Button variant="outline-primary">Não possui conta? Cadastrar</Button>{''}
                </Link>

            </div>
        </div>
     );
}
 
export default Login;