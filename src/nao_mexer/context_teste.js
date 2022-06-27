import React from "react";


export const Contexto = React.createContext();
export const Provedor =( props ) => {

    return(
    <Contexto.Provider value={props}>
        {props.children}
    </Contexto.Provider>
    );

}





//// PARTE DO APP.JS

import React, { useState } from "react";

//Trazendo o contexto e provedor la da minha pasta de contexto de usuario;
import { Provedor } from "./ContextUsuario";
import { ContextoContato } from "./ContextoContato";
import Contato from "./Contato";
import Cadastro from "./Cadastro";

function AppP() {


    
    const [nomeatual, MudaNome]=useState("Fernandinho");
    

    const [idadeAtual , MudaIdade]=useState(15);
    


    return (

        <div className="App">

            <h1> Aula de Context API </h1>


            <button onClick={() => MudaNome("Geraldo")} >Clica aqui</button>

            <button onClick={()=> MudaNome("Pedro")}> Não curtiu o nome?</button>


            <input name="idade" type="number" placeholder="quer mudar a idade?"/>
            <button onClick={()=> MudaIdade(
                document.querySelector('input[name="idade"').value
            )}>Entra</button>


            

{/* Colocar dentro do contexto apenas aquilo que precisa observar o contexto*/}
{/* Provider indentifica o que ira prover no contexto definido pelo parametro values */}
            <Provedor nome={nomeatual} idade= {idadeAtual}>
                <Cadastro />
            </Provedor>

{/*
            <ContextoContato.Provider value={{nome:"Bababooye"}}>
                <Contato/>
            </ContextoContato.Provider>
    */}

        </div>
    );
}

//export default AppP;


/// PARTE DO CADASTRO


import React from 'react';
import { Contexto } from './ContextUsuario';

const Cadastro = () => {

    {/*Criando uma variavel para guardar as informações do contexto pra usar no codigo*/}
    const informacoes = React.useContext (Contexto);

    return ( 
    <div>
        <h1>Usuarios</h1>
        <p>Olá, seja bem vindo {informacoes.nome}</p>
        <p>Voce tem {informacoes.idade} anos</p>
    </div>
     );
}
 
//export default CadastroO