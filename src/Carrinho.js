import React from 'react';
import { Link } from 'react-router-dom';

const Carrinho = () => {

    require('./estilos/carrinho.css');

    return(
        <div className='Carrinho'>
        <div className='Container'>
        
        <h3> eConst.com</h3>
            <Link className="Link" to={'/produto'}>
                    <div className="Resultado">
                    <div className="blocoImagem">
                    <img src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/></div>

                <div className='Blocobutton'>    
                    <button> Cancelar</button> 
                </div>
                     
                   
                    </div>

            </Link>
                
            <Link className="Link" to={'/produto'}>
                <div className="Resultado">
                <div className="blocoImagem">
                <img src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>  </div>
                           
                <div className='Blocobutton'>    
                 <button> Cancelar</button> 
                </div>
                

                     
                    </div>
            </Link>

          
            <Link className="Link" to={'/produto'}>
                    <div className="Resultado">
                    <div className="blocoImagem">
                    <img src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/></div>

                <div className='Blocobutton'>    
                    <button> Cancelar</button> 
                </div>
                     
                   
                    </div>

            </Link>

                </div>


    
        </div>
        

            
        
    );
}

export default Carrinho;