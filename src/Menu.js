import React from "react";
import { Link } from "react-router-dom";

const Menu = (props) => {

    const FazPesquisa = () => {

        const produtoPesquisado = document.getElementById('pesquisa').value;

    }

    //Inicio de tratamento de sessão

    const usuario = localStorage.getItem("IDusuario")

    //const Sair = () => {
     //   localStorage.removeItem("IDusuario");
     //   window.location.href='/';
    //}


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
                    
                    <input id="pesquisa" placeholder="Insira um produto de interesse..." autoFocus/>
                    <Link to={'/pesquisa'}>
                    <button>Buscar</button>
                    </Link>
                    
                </form>
            </div>

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