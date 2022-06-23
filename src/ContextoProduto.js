import React from "react";


export const Contexto = React.createContext();
export const Provedor =( props ) => {

    return(
    <Contexto.Provider value={props}>
        {props.children}
    </Contexto.Provider>
    );

}