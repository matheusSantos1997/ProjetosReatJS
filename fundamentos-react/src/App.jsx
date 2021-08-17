import './App.css';
import React from 'react';
import Card from './components/layout/Card';

import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import DiretaPai from './components/comunicacao/DiretaPai';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
  
const App = () => {
    return (
        <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
                <Card titulo="#11 - Componente Controlado" color="#E45F56">
                  <Input></Input>  
                </Card>
                <Card titulo="#10 - Comunicaçao Indireta" color="#8BAD39">
                   <IndiretaPai></IndiretaPai>
                </Card>
                <Card titulo="#09 - Comunicaçao Direta" color="#59323C">
                    <DiretaPai></DiretaPai>
                </Card>
                <Card titulo="#08 Renderização Condicional" color="#982395">
                    <ParOuImpar numero={20}></ParOuImpar>
                    <UsuarioInfo usuario={{nome: 'Matheus'}}></UsuarioInfo>
                    <UsuarioInfo usuario={{email: 'matheus.uspeu@gmail.com'}}></UsuarioInfo>
                </Card>
                <Card titulo="#07 Tabela de produtos" color="#03396c">
                   <TabelaProdutos></TabelaProdutos>
                </Card>
                <Card titulo="#06 Repeticao" color="#f37735">
                   <ListaAlunos></ListaAlunos>
                </Card>
                <Card titulo="#05 Componente com filhos" color="#080">
                    <Familia sobrenome="Santos">
                        <FamiliaMembro nome="Matheus" />
                        <FamiliaMembro nome="Ciclano" />
                        <FamiliaMembro nome="Beltano" />
                    </Familia>
                </Card>
                <Card titulo="#04 Desafio aleatorio" color="#080">
                    <Aleatorio min={1} max={60} />
                </Card>
                <Card titulo="#03 Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>
                <Card titulo="#02 Com parametro" color="#E8B714">
                    <ComParametro titulo="situacao usuário " aluno="Pedro " nota={9.3} />
                </Card>

                <Card titulo="#01 Primeiro componente" color="#588C73">
                    <Primeiro></Primeiro>
                </Card>
        </div>
    </div>
    );
};

export default App;