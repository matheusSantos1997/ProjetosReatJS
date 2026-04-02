import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

const App = () => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <Card titulo="Desafio Aleatório">
      <Aleatorio min={10} max={60}></Aleatorio>
    </Card>
    <Card titulo="Fragmento">
      <Fragmento></Fragmento>
    </Card>
    <Card titulo="Com Parâmetro">
      <ComParametro titulo="Situação do Aluno:" aluno="Fulano!" nota={9.3} />
    </Card>
    <Card titulo="Primeiro">
      <Primeiro></Primeiro>
    </Card>
  </div>
);

export default App;
