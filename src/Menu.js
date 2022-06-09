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
                    
                    <input placeholder="Insira um produto de interesse..."/>
                    <Link to={'/pesquisa'}>
                    <button>Buscar</button>
                    </Link>
                    <Link to={'/carrinho'} className="icone"> <img src="https://i.imgur.com/aKCd3IU.png"/> </Link>
                    
                </form>
            </div>

            <div className="Teste">
                <Link to={'/teste'}>TESTE</Link>
            </div>

            <div>
                <Link to={'/carrinho'}className="editar1"> 🛒</Link>
                <Link to={'/cadastro'}className="editar1">cadastro</Link>
                
                <Link to={'/cadastro'}className="editar1">Cadastrar</Link>
                <Link to={'/login'}className="editar1">Login</Link>
                <Link to={'/usuario'}className="icone"><img src="https://i.imgur.com/ecjAjrL.png"/></Link>
            </div>
            

        </div>
    )
}

export default Menu;