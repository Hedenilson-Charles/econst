import React from "react";
import { Link } from "react-router-dom";




const Cadastro = () => {

    require('./estilos/cadastro.css');

    const alerta = () => {
        alert("Funcionou!");
    }

    const [usuario , CadastraUsuario] = React.useState([]);

    const obj = {
    };

    const axios = require('axios').default;

    React.useEffect( ()=> {
        axios.post('http://localhost:3001/cadastro' ,obj )
        .then(function(response) {
            const dados = response.data
            console.log(dados);

            console.log(response);
        })

        .catch(function(error){
            console.log(error);
        })
    } )


    return(

         <div>
            <div className="inicio">

                <h1>Cadastro</h1>
                <h2>Insira seus dados abaixo:</h2>
                <br/>


            </div>

            <form>

                <div className="Cadastro">
                    
                    <input placeholder = "Nome..." />
                    <br/>
                    <input placeholder = "CPF" className="CPF"/>
                    <br/>
                    <input placeholder = "CEP" className="CEP"/>
                    <br/>
                    <input placeholder = "CIDADE" className="CIDADE"/>
                    <input placeholder = "UF" className="UF"/>
                    <input placeholder = "COMPLEMENTO" className="COMPLEMENTO"/>
                    <br/>
                    <input placeholder = "ENDEREÇO"/>
                    <br/>
                    <input placeholder = "E-MAIL"/>
                    <br/>
                    <input type ="password" placeholder = "SENHA" className="SENHA"/>
                    <input type = "password" placeholder = "CONFIRMAR SENHA" className="CONFIRMAR"/>
                    <br/>

                </div>

                    <div className="Botões">

                        
                        <button  onClick={()=> alerta()} className="Botões3">Confirmar</button>
                        
                        <br/>
                        <Link to="/login">
                        <button className="Botões2">Já é cliente? Fazer login</button>
                        </Link>

                    </div>

            </form>

                


        </div>
     )
}
 
export default Cadastro;                                