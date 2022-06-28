import React from 'react';
import { Link } from 'react-router-dom';

const Carrinho = () => {

    require('./estilos/carrinho.css');

    const [quantidade , alteraQuantidade] = React.useState(0);


    return(
        <div className='Carrinho'>


            <div>
            <p>Produto</p>
            <p>Preço</p>
            </div>

        <Link className="Link" to={'/produto'}> </Link>

        <div className="Elementos">
            <img alt='Compras' src='https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg'/>

            <p>Descrição para o produto de teste XG blá blá blá blá e é isso, não sei o que estou fazendo. Obrigada!</p>

            <div className="selecionador">

            <p> Quantidade de produto:
                <br/> 
                <button onClick={() => alteraQuantidade( quantidade - 1)}><b>-</b></button> {quantidade} <button onClick={()=> alteraQuantidade( quantidade + 1)}><b>+</b></button></p>

               
             

            </div>

        </div>


        
       

           
                
                   
        
            

               
        

            










       </div> 
    );
}

export default Carrinho;