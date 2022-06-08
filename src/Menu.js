import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {


    require('./estilos/menu.css');

    return(
        <div className="Menu">

            <div className="Logo">

                <Link to={'/'}>
                   <img src="https://i.imgur.com/HAA9XbR.png"/>
                </Link>
                
            </div>

            <div className="Pesquisa">
                <form>

                    <input placeholder="Este é um placeholder"/ >
                    <Link to={'/pesquisa'} >
                    <button>buscar</button>
                    </Link>
                    
                </form>
            </div>

            <div>
                <Link to={'/teste'}>TESTE</Link>
            </div>

            <div>
                <Link to={'/carrinho'}className="editar1"> 🛒</Link>
                <Link to={'/cadastro'}className="editar1">cadastro</Link>
                <Link to={'/login'}className="editar1">Login</Link>
                <Link to={'/usuario'}className="editar1">usuario</Link>
            </div>
            

        </div>
    )
}

export default Menu;