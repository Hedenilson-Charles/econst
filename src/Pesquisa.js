import React from "react";
import { Link } from "react-router-dom";


const Pesquisa = () => {



    const ItemPesquisado = localStorage.getItem("Pesquisa");
    const [produtos, imprimeProdutos] = React.useState([]);

    const axios = require('axios').default;

    React.useEffect ( () => {

        const obj = {
            nome: ItemPesquisado
        }


        axios.post('http://localhost:3001/pesquisa/', obj) //completar aqui

        .then(function (response) {
            const dados = response.data;
            console.log(dados)
            imprimeProdutos(dados);

        })

        .catch(function (error) {
            console.log(error);
        })

    }, [])


    require('./estilos/pesquisa.css');
    
    return(

        <div className="Pesquisa">

            <div className="Busca">
                {  
                    (produtos == 0? "Carregando..." : 
                            produtos.map( u => 
                                {
                                const dinheiro = u.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                                console.log(u);
                                return(

                                    <div className="TextDecoration">
                                    <Link className="Link" to={`/produto/${u.idprodutos}`}>
                                        <div className="Resultado">
                                            <div className="BlocoImagem">
                                                <img src={u.imagem}/>
                                            </div>
                                            <div className="blocoTextoBotao">
                                                <h3>{u.nome}</h3>
                                                <p>{dinheiro}</p> 
                                                <p className="Descricao">{u.descricao}</p>                      
                                            </div>                                        
                                        </div>
                                    </Link>
                                    </div>
                                    
                                )})
                    )       
                }    

            </div>

        </div>
    );
}

export default Pesquisa;