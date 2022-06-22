import React from 'react';
import { Link } from 'react-router-dom';

const Carrinho = () => {

    require('./estilos/carrinho.css');

    return(
        <div className='Carrinho'>

        <div className='Container'>
        <div className='BlocoImagem'>
        <p> Loja de Fulano</p>
        <hr/>
        <img src='https://http2.mlstatic.com/bolsa-gucci-marmont-matelass-preta-original-na-caixa-D_NQ_NP_732400-MLB26747258744_022018-F.jpg'/>


        
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
      

        <div className='BlocoEsquerdo'></div>
        <button> Clique aqui</button>
        <button> Clique aqui</button>
        <div className='BlocoDireito'>
               

                
        </div>
        </div>

            
        </div>
    );
}

export default Carrinho;