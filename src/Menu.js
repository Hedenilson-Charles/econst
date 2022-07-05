import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {


    const FazPesquisa = (e) => {

        e.preventDefault();
        const produtoPesquisado = document.getElementById('pesquisa').value;
        localStorage.setItem("Pesquisa", produtoPesquisado)
        window.location.href='/pesquisa';

    }

    const usuario = localStorage.getItem("IDusuario")



    require('./estilos/menu.css');

    return(


        <div className="Menu">

            <div className="Logo">

                <Link to={'/'}>
                   <img src="https://i.imgur.com/HAA9XbR.png"/>
                </Link>
                
            </div>


            <div className="Pesquisa">
                <form onSubmit={(e)=> FazPesquisa(e)}>

                    
                    
                    <input required id="pesquisa" placeholder="Insira um produto de interesse..." autoFocus/>
                    
                    <button>Buscar</button>
                    
                    
                </form>
            </div>

            <Link to="/carrinho">
                <img className="icone" src="https://i.imgur.com/OXzf3ww.png"/>
            </Link>

            <div className="Teste">
                <Link to={'/pedidos'}>Pedidos</Link>
            </div>

            <div>
                
                
                

                { (usuario == undefined? <div><Link to={'/cadastro'}className="editar1">Cadastrar</Link> <Link to={'/login'}className="editar1">Login</Link> </div>
                 : <Link to={'/usuario'}className="icone"><img src="https://i.imgur.com/ecjAjrL.png"/></Link>)  }
                
            </div>
            

        </div>
    )
}

export default Menu;