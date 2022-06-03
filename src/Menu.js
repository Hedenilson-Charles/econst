import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {


    require('./estilos/menu.css');

    return(
        <div className="Menu">

            <div className="Logo">

                <Link to={'/'}>
                   <img src="https://i.imgur.com/9IxXQHv.png"/>
                </Link>
                
            </div>

            <div>
                <form>

                    <input placeholder="Este é um placeholder"/>
                    <Link to={'/pesquisa'}>
                    <button>buscar</button>
                    </Link>
                    
                </form>
            </div>

            <div>
                <Link to={'/teste'}>TESTE</Link>
            </div>

            <div className="CoresEborda">
                <Link to={'/carrinho'}>carrinho</Link>
                <Link to={'/cadastro'}>cadastro</Link>
                <Link to={'/login'}>Login</Link>
                <Link to={'/usuario'}>usuario</Link>
            </div>
            

        </div>
    )
}

export default Menu;