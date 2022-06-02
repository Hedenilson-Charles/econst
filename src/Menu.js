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
                    <input></input><button>Pesquisar</button>
                </form>
            </div>

            <div>
                <Link to={'/carrinho'} className="editar1">carrinho</Link>
                <Link to={'/cadastro'} className="editar1">cadastro</Link>
                <Link to={'/login'} className="editar1">Login</Link>
                <Link to={'/usuario'} className="editar1">usuario</Link>
            </div>
            

        </div>
    )
}

export default Menu;