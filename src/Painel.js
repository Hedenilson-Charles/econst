import React from 'react'

const Painel = () => {

    require('./estilos/Painel.css');
    
    return(
        <div className='Painel'>
        <div>
            
            <p>Endereço:</p>
            <p>E-mail:</p>
            <p>CPF:</p>
        </div>
        </div>
    );
}
export default Painel;