import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

const App = (props) => {
    return (
        <div id="app">
        <h1>Fundamentos React</h1>
        <Fragmento/>
        <ComParametro 
        titulo="situacao usuário" aluno="Pedro" nota={9.3} />
        <Primeiro></Primeiro>
        
    </div>
    );
};

export default App;