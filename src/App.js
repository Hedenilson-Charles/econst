import React from "react";
import Menu from "./Menu";
import Usuario from "./Usuario";
import Cadastro from "./Cadastro";
import Login from "./Login";
import Inicio from "./Inicio";
import Rodape from "./Rodape";
import { Routes, Route } from "react-router-dom";
import Produto from "./Produto";
import Pesquisa from "./Pesquisa";
import Carrinho from "./Carrinho";

const App = () => {
  return(
    <div>
      <Menu/>
      

      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/usuario" element={<Usuario/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/produto" element={<Produto/>}/>
        <Route path="/pesquisa" element={<Pesquisa/>}/>
        <Route path="/carrinho" element={<Carrinho/>}/>
      </Routes>


      <Rodape/>
    </div>
  );
}

export default App;
