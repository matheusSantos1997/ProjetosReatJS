import React from 'react';

const DiretaFilho = (props) => {
      return(
          <span>
              <span>{props.nome}, </span>
              <span><strong>{props.idade}</strong>, </span>
              <span>{props.nerd ? 'Verdadeiro' : 'Falso'}!</span>
          </span>
      )
}

export default DiretaFilho;