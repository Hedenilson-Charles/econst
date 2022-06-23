import React from 'react';
import { Link } from 'react-router-dom';

const Carrinho = () => {

    require('./estilos/carrinho.css');

    return(
        <div className='Carrinho'>
        <div className='Container'>
        
      
            <Link className="Link" to={'/produto'}>
                    <div className="Resultado">
                    <div className="blocoImagem">
                    <img src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/></div>


                <div>    
                <Link className="Link" to={'/produto'}> </Link>
                <p> Bala de Gelatina e Marshmallows Dentadura 90g - Fini</p>
                </div>
                     
                <div className='Blocobutton'>    
                    <button> Remover</button> 
                </div>
                   
                    </div>
                <hr/>
            </Link>
                
            <Link className="Link" to={'/produto'}>
                <div className="Resultado">
                <div className="blocoImagem">
                <img src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/>  </div>
                           
                

                <div>    
                <Link className="Link" to={'/produto'}> </Link>
                <p> Bala de Gelatina e Marshmallows Dentadura 90g - Fini</p>
                </div>

                <div className='Blocobutton'>    
                 <button> Remover</button> 
                </div>
                     
                    </div>
            </Link>

                <hr/>
            <Link className="Link" to={'/produto'}>
                    <div className="Resultado">
                    <div className="blocoImagem">
                    <img src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"/></div>

                     
                <div>    
                <Link className="Link" to={'/produto'}> </Link>
                <p> Bala de Gelatina e Marshmallows Dentadura 90g - Fini</p>
                </div>
                     
                <div className='Blocobutton'>    
                    <button> Remover</button> 
                </div>

                    </div>
            <hr/>
            </Link>

                </div>


    
        </div>
        

            
        
    );
}

export default Carrinho;