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

            <div>
                <form>

                    <input placeholder="Insira um produto de interesse..."/>
                    <Link to={'/pesquisa'}>
                    <button>buscar</button>
                    </Link>
                    <Link to={'/carrinho'} className="icone"> <img src="https://i.imgur.com/aKCd3IU.png"/> </Link>
                    
                </form>
            </div>

            <div className="Teste">
                <Link to={'/teste'}>TESTE</Link>
            </div>

            <div>
                
                <Link to={'/cadastro'}className="editar1">Le cadastro</Link>
                <Link to={'/login'}className="editar1">Le Login</Link>
                <Link to={'/usuario'}className="editar1">Le usuario</Link>
            </div>
            

        </div>
    )
}

export default Menu;