import React from "react";
import { Link } from "react-router-dom";

const Usuario = () => {

    require('./estilos/usuario.css');

    const axios = require('axios').default;
    const ID = localStorage.getItem("IDusuario");
    const [usuario, pegaUsuario] = React.useState([]);

    const obj = {
        idusuario: ID
    }

    React.useEffect ( () => {


        axios.post('http://localhost:3001/usuario/', obj)

        .then(function (response) {

            const dados = response.data;
            
            
            pegaUsuario(dados);
    
        })

        .catch(function (error) {
            console.log(error);
        })

    },[])

    const Sair = () => {
        localStorage.removeItem("IDusuario");
        window.location.href='/';
    }

    return(
        <div className="Usuario">

            {(usuario == 0? "Oops ! Algo deu errado..." : 
            <div className="Usuario">
                <div className="BlocoEsquerdo">
                    <img src="https://i.imgur.com/HAA9XbR.png"/>
                    <p><b>Endereço:</b>{usuario[0].endereco}</p>
                    <p><b>E-mail:</b>{usuario[0].email}</p>
                    
                </div>
                <div className="BlocoDireito">
                    <img src="https://cdn.onlinewebfonts.com/svg/img_184513.png"/>
                    <p>{usuario[0].nome}</p>
                    {(usuario[0].adm == 2? "" : <Link to="/cadastraProduto"><button>Novo Produto</button> </Link>)}
                    <Link to="/">
                        <button className="BotaoSair" onClick={()=> Sair()}>Sair</button>
                    </Link>
                </div>
            </div> )}


            {/* Abaixo bloco com layout pro usuario padrão */}
        </div>
    );
}

export default Usuario;