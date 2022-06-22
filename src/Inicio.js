import React from "react";
import { Link } from "react-router-dom";

const Inicio = () => {

    //INICIO DA CONEXÃO COM BANCO

    const [produtos, imprimeProdutos] = React.useState([]);

    const axios = require('axios').default;

    React.useEffect ( () => {

        axios.get('http://localhost:3001/')

        .then(function (response) {

            const dados = response.data;
            
            
            imprimeProdutos(dados);
        
      
        })

        .catch(function (error) {
            console.log(error);
        })

    }, [])

    //FIM DA CONEXÃO COM BANCO

    require('./estilos/inicio.css');
    return ( 
        <div className="Inicio">

           {/*
            <div className="TESTE_BANCO">
                

                
                {(produtos == 0? "Carregando..." : 
                    <div>

                        {produtos.map( u => {
                            console.log(u);
                            return(

                                
                                <h1>Nome: {u.nome}</h1>
                                
                            )
                        })}

                    </div>
                )}

            
            </div>
        */}


            <div className="Container">

                {/*Imitar o de baixo pra imprimir no banco */}
            <div className="CardProduto">
            <Link className="Link" to={'/produto'}>
                <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                <p>Texto Exemplo</p>
                <p>Preço Qualquer</p>
            </Link>

            </div>

            <div className="CardProduto">

            <Link className="Link" to={'/produto'}>
                <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                <p>Texto Exemplo</p>
                <p>Preço Qualquer</p>
            </Link>
            
            </div>

            <div className="CardProduto">

            <Link className="Link" to={'/produto'}>
                <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                <p>Texto Exemplo</p>
                <p>Preço Qualquer</p>
            </Link>

            </div>

            <div className="CardProduto">

            <Link className="Link" to={'/produto'}>
                <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                <p>Texto Exemplo</p>
                <p>Preço Qualquer</p>
            </Link>

            </div>

            <div className="CardProduto">

            <Link className="Link" to={'/produto'}>
                <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                <p>Texto Exemplo</p>
                <p>Preço Qualquer</p>
            </Link>

            </div>

            <div className="CardProduto">

        <Link className="Link" to={'/produto'}>
            <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
            <p>Texto Exemplo</p>
            <p>Preço Qualquer</p>
        </Link>

        </div>

        <div className="CardProduto">

        <Link className="Link" to={'/produto'}>
            <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
            <p>Texto Exemplo</p>
            <p>Preço Qualquer</p>
        </Link>

        </div>
          
        <div className="CardProduto">

            <Link className="Link" to={'/produto'}>
                <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                <p>Texto Exemplo</p>
                <p>Preço Qualquer</p>
            </Link>

            </div>

            <div className="CardProduto">

            <Link className="Link" to={'/produto'}>
                <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                <p>Texto Exemplo</p>
                <p>Preço Qualquer</p>
            </Link>

            </div>

            <div className="CardProduto">

            <Link className="Link" to={'/produto'}>
                <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                <p>Texto Exemplo</p>
                <p>Preço Qualquer</p>
            </Link>

            </div>

            <div className="CardProduto">

            <Link className="Link" to={'/produto'}>
                <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                <p>Texto Exemplo</p>
                <p>Preço Qualquer</p>
            </Link>

            </div>

            <div className="CardProduto">

            <Link className="Link" to={'/produto'}>
                <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                <p>Texto Exemplo</p>
                <p>Preço Qualquer</p>
            </Link>

            </div>

            <div className="CardProduto">

            <Link className="Link" to={'/produto'}>
                <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                <p>Texto Exemplo</p>
                <p>Preço Qualquer</p>
            </Link>

        </div>

        <div className="CardProduto">

        <Link className="Link" to={'/produto'}>
            <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
            <p>Texto Exemplo</p>
            <p>Preço Qualquer</p>
        </Link>

        </div>

        <div className="CardProduto">

        <Link className="Link" to={'/produto'}>
            <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
            <p>Texto Exemplo</p>
            <p>Preço Qualquer</p>
        </Link>

        </div>

        <div className="CardProduto">

        <Link className="Link" to={'/produto'}>
            <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
            <p>Texto Exemplo</p>
            <p>Preço Qualquer</p>
        </Link>

        </div>
        
        <div className="CardProduto">

            <Link className="Link" to={'/produto'}>
                <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                <p>Texto Exemplo</p>
                <p>Preço Qualquer</p>
            </Link>

            </div>
            <div className="CardProduto">

            <Link className="Link" to={'/produto'}>
                <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                <p>Texto Exemplo</p>
                <p>Preço Qualquer</p>
            </Link>

            </div>

            <div className="CardProduto">

            <Link className="Link" to={'/produto'}>
                <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                <p>Texto Exemplo</p>
                <p>Preço Qualquer</p>
            </Link>

            </div>

            <div className="CardProduto">

            <Link className="Link" to={'/produto'}>
                <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                <p>Texto Exemplo</p>
                <p>Preço Qualquer</p>
            </Link>

            </div>

            <div className="CardProduto">

                <Link className="Link" to={'/produto'}>
                    <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                    <p>Texto Exemplo</p>
                    <p>Preço Qualquer</p>
                </Link>

                </div>

                <div className="CardProduto">

                <Link className="Link" to={'/produto'}>
                    <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                    <p>Texto Exemplo</p>
                    <p>Preço Qualquer</p>
                </Link>

                </div>

                <div className="CardProduto">

            <Link className="Link" to={'/produto'}>
                <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                <p>Texto Exemplo</p>
                <p>Preço Qualquer</p>
            </Link>

            </div>

            <div className="CardProduto">

            <Link className="Link" to={'/produto'}>
                <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                <p>Texto Exemplo</p>
                <p>Preço Qualquer</p>
            </Link>

            </div>

            <div className="CardProduto">

            <Link className="Link" to={'/produto'}>
                <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                <p>Texto Exemplo</p>
                <p>Preço Qualquer</p>
            </Link>

            </div>
            

            <div className="CardProduto">

            <Link className="Link" to={'/produto'}>
                <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                <p>Texto Exemplo</p>
                <p>Preço Qualquer</p>
            </Link>

            </div>

            <div className="CardProduto">

            <Link className="Link" to={'/produto'}>
                <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                <p>Texto Exemplo</p>
                <p>Preço Qualquer</p>
            </Link>

            </div>

            <div className="CardProduto">

            <Link className="Link" to={'/produto'}>
                <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                <p>Texto Exemplo</p>
                <p>Preço Qualquer</p>
            </Link>

            </div>

            <div className="CardProduto">

            <Link className="Link" to={'/produto'}>
                <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                <p>Texto Exemplo</p>
                <p>Preço Qualquer</p>
            </Link>

            </div>

            <div className="CardProduto">

            <Link className="Link" to={'/produto'}>
                <img className="Imagem" src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                <p>Texto Exemplo</p>
                <p>Preço Qualquer</p>
            </Link>

            </div>

        </div>
        </div>
     );
}
 
export default Inicio;