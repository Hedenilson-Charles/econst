import React from 'react';
import { Link } from 'react-router-dom';

const Carrinho = () => {

    require('./estilos/carrinho.css');

    const [quantidade , alteraQuantidade] = React.useState(0);


    return(
        <div className='Carrinho'>


            <div className="Guia">
            <p>Produto</p>

            <div className='Guia2'>
            <p>Preço</p>
            <p>Qtd.</p>
            <hr/>
            </div>

            
            </div>

        <Link className="Link" to={'/produto'}> </Link>

        <div className="Elementos">
            <img alt='Compras' src='https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg'/>

            <Link className="Link" to={'/produto'}> 

            <div className='Descrição'>
                
            <p>Descrição para o rpoduto de teste XG blá blá blá blá e é isso, não sei o que estou fazendo. Obrigada!</p>
            
            </div>
            </Link>

            <div className='preco'>
                <p>R$00,00</p>
            </div>

            <div className="quantidade">

            <p> Quantidade de produto
                <br/> 
                <button onClick={() => alteraQuantidade( quantidade - 1)}><b>-</b></button> {quantidade} <button onClick={()=> alteraQuantidade( quantidade + 1)}><b>+</b></button></p>
            </div>

            <div className='remover'>
               <button>Remover</button>
            </div>


        </div>


        
       

           
                
                   
        
            

               
        

            










       </div> 
    );
}

export default Carrinho;