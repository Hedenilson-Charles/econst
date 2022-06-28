import React from 'react';

const CadastraProduto = () => {
    require('./estilos/cadastraProduto.css');

    return ( 
        <div> 
            <div className='texto' > 
                <h1>  Cadastre seu produto </h1>
                <h2>Insira os dados do produto abaixo</h2>
            </div>   
            
            <div className='ContainerCP'>
                <form>
                    <br></br>
                    
                    <input placeholder='Insira o nome do produto.'/>
                   <input className="Preco" placeholder='Marca do produto'/>
                   <input className="Preco" placeholder='Dimensão do produto'/>
                   <input className="Preco" placeholder='Valor do produto'/>
                    
                    <input id="selector" placeholder='Insira a quantidade em estoque.'/>
                    
                    <textarea className='descricao' placeholder='Adicione uma descrição ao seu produto.'/>
                    <button className='botao'> Confirmar </button>
                    
            
                </form>
                
            </div>
        </div>
     );
}
 
export default CadastraProduto;

