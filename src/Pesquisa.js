import React from "react";
import { Link } from "react-router-dom";

const Pesquisa = () => {

    require('./estilos/pesquisa.css');

    return(

        <div className="Pesquisa">
            <div className="Busca">

                <Link className="Link" to={'/produto'}>
                <div className="Resultado">
                    <div className="blocoImagem">
                        <img src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                    </div>

                    <div className="blocoTextoBotao">
                        <p>Texto descricional qualquer usado apenas para ocupar espaço e dessa forma, observar o comportamento do card quando usado com um texto</p>
                        
                    </div>
                </div>
                </Link>

                <Link className="Link" to={'/produto'}>
                <div className="Resultado">
                    <div className="blocoImagem">
                        <img src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                    </div>

                    <div className="blocoTextoBotao">
                        <p>Texto descricional qualquer usado apenas para ocupar espaço e dessa forma, observar o comportamento do card quando usado com um texto</p>
                        
                    </div>
                </div>
                </Link>

                <Link className="Link" to={'/produto'}>
                <div className="Resultado">
                    <div className="blocoImagem">
                        <img src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                    </div>

                    <div className="blocoTextoBotao">
                        <p>Texto descricional qualquer usado apenas para ocupar espaço e dessa forma, observar o comportamento do card quando usado com um texto</p>
                        
                    </div>
                </div>
                </Link>

                <Link className="Link" to={'/produto'}>
                <div className="Resultado">
                    <div className="blocoImagem">
                        <img src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                    </div>

                    <div className="blocoTextoBotao">
                        <p>Texto descricional qualquer usado apenas para ocupar espaço e dessa forma, observar o comportamento do card quando usado com um texto</p>
                        
                    </div>
                </div>
                </Link>

                <Link className="Link" to={'/produto'}>
                <div className="Resultado">
                    <div className="blocoImagem">
                        <img src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>
                    </div>

                    <div className="blocoTextoBotao">
                        <p>Texto descricional qualquer usado apenas para ocupar espaço e dessa forma, observar o comportamento do card quando usado com um texto</p>
                        
                    </div>
                </div>
                </Link>
            </div>

        </div>
    );
}

export default Pesquisa;