import React from 'react';

const Aleatorio = (props) => {
    
    const { min, max } = props; // destructuring 

    const aleatorio = parseInt(Math.random() * (max - min)) + min; // gera um numero aleatorio
    return (
       <div>
           <h2>Valor Aleatorio</h2>
           <p><strong>Valor minimo: </strong>{min}</p>
           <p><strong>Valor maximo: </strong>{max}</p>
           <p><strong>Valor Escolhido: </strong>{aleatorio}</p>
       </div>
    );
}

export default Aleatorio;