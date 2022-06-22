import React from "react";
import { Link } from "react-router-dom";

const Pesquisa = () => {

    const [produtos, imprimeProdutos] = React.useState([]);
    const axios = require('axios').default;

    React.useEffect ( () => {

        axios.get('http://localhost:3001/')

        //axios.get('http://localhost:3001')

        .then(function (response) {

            const dados = response.data;
            
            
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
                                console.log(u);
                                return(

                                    <Link to='/produto'>
                                        <div className="Resultado">
                                            <div className="BlocoImagem">
                                                <img src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                                            </div>
                                            <div className="blocoTextoBotao">
                                                <h3>{u.nome}</h3>
                                                <p>{u.email}</p>                       
                                            </div>                                        
                                        </div>
                                    </Link>
                                    
                                )})
                    )
                }       
            </div>

        </div>
    );
}

export default Pesquisa;