import React from 'react';

const CadastraProduto = () => {
    require('./estilos/cadastraProduto.css');
    return ( 
        <div>
            <div className='ContainerCP'>
                <form>
                    
                    <input placeholder='Insira o nome do produto.'/>
                    
                    <input placeholder='Insira a quantidade em estoque.'/>
                    
                    <input placeholder='Adicione uma descrição ao seu produto.'/>
                    <input type='file'/>

            
                </form>
                
            </div>
        </div>
     );
}
 
export default CadastraProduto;

