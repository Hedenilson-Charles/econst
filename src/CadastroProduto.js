import React from 'react';

const CadastraProduto = () => {
    require('./estilos/cadastraProduto.css');

    const Formulario = () => {

        const nome = document.getElementById('nome').value;
        const preco = document.getElementById('preco').value;
        const tamanho = document.getElementById('tamanho').value;
        const quantidade = document.getElementById('quantidade').value;
        const descricao = document.getElementById('descricao').value;
        const marca = document.getElementById('marca').value;






    }

    return ( 
        <div> 
            <div className='texto' > 
                <h1>  Cadastre seu produto </h1>
                <h2>Insira os dados do produto abaixo</h2>
            </div>   
            
            <div className='ContainerCP'>
                <form>
                    <br></br>
                    
                    <input id='nome' placeholder='Insira o nome do produto.'/>
                    <input id = 'marca'className="Preco" placeholder='Marca do produto'/>
                    <input id='tamanho' className="Preco" placeholder='Dimensão do produto'/>
                    <input id='preco' className="Preco" placeholder='Valor do produto'/>
                    
                    <input id='quantidade' placeholder='Insira a quantidade em estoque.'/>
                    
                    <textarea id='descricao' className='descricao' placeholder='Adicione uma descrição ao seu produto.'/>


                    <button onClick={()=> Formulario()} className='botao'> Confirmar </button>
                    
            
                </form>
                
            </div>
        </div>
     );
}
 
export default CadastraProduto;

