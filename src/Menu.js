import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {


    require('./estilos/menu.css');

    return(
        <div className="Menu">

            <div className="Logo">
                <img src="#"/>
            </div>

            <div>
                <form>
                    <input></input><button>Pesquisar</button>
                </form>
            </div>

            <div>
                <Link to={'/carrinho'}>carrinho</Link>
                <Link to={'/cadastro'}>cadastro</Link>
                <Link to={'/login'}>Login</Link>
                <Link to={'/usuario'}>usuario</Link>
            </div>
            

        </div>
    )
}

export default Menu;