import React from 'react'

const Painel = () => {

    require('./estilos/Painel.css');
    
    return(
        <div className="Painel">
        
            <div>
            <img src='https://i.imgur.com/HAA9XbR.png'/>
            <input placeholder = "Endereço:" />
            <input placeholder = "E-mail:" />
            <input placeholder = "CPF:" />

                <div>
                <img src='https://th.bing.com/th/id/OIP.6TwhoOQY72DwcJBG_kcwZwHaHa?pid=ImgDetrs=1.jpg'/>
                <h3>Nome do Usuário</h3>
                <button>🖊️</button>
                
                </div>
            
        </div>
        </div>
    );
}
export default Painel;