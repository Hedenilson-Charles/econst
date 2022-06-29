import React from 'react';

const CadastraProduto = () => {
    require('./estilos/cadastraProduto.css');

    const Formulario = () => {

        const nome = document.getElementById('nome').value;
        const preco = document.getElementById('preco').value;
        const imagem = document.getElementById('imagem').value;
        const quantidade = document.getElementById('quantidade').value;
        const descricao = document.getElementById('descricao').value;
        const marca = document.getElementById('marca').value;

        const obj = {
            nome: nome,
            preco: preco,
            imagem: imagem,
            quantidade: quantidade,
            descricao: descricao,
            marca: marca
        }

/*       const axios = require('axios');

                axios.post('http://localhost:3001/cadastraproduto/', obj )
                .then(function(response){
                    const dados = response.data;
                })

                .catch(function(error){
                    console.log
                }) */
    }

    return ( 
        <div> 
            <div className='texto' > 
                <h1>  Cadastro de produtos </h1>
                <h2>Preencha os dados abaixo</h2>
            </div>   
            
            <div className='Container'>
                <form>
                    
                    <input id='nome' placeholder='Nome do produto.'/>

                    <div className='Bloco'>
                        <input id = 'marca'className="Preco" placeholder='Marca'/>
                        <input required id='preco' className="Preco" placeholder='Preço'/>
                        <input required type="number" id='quantidade' placeholder='Estoque'/>
                    </div>

                    <input id='imagem' required placeholder='Link da imagem...'/>

                    
                    <textarea id='descricao' className='descricao' placeholder='Adicione uma descrição ao seu produto.'/>


                    <button onClick={()=> Formulario()} className='botao'> Confirmar </button>
                    
                </form>   
            </div>
        </div>
     );
}
 
export default CadastraProduto;

