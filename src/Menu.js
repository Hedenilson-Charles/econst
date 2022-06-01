import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return(
        <div className="Menu">
            <div>
                <Link to={'/cadastro'}>cadastro</Link>
                <Link to={'/login'}>Login</Link>
                <Link to={'/usuario'}>usuario</Link>
            </div>
            

        </div>
    )
}

export default Menu;