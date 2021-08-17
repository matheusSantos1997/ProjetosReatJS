import React from 'react';

const IndiretaFilho = (props) => {
      // const cb = props.quandoClicar
      const gerarIdade = () => parseInt(Math.random() * (20)) + 50;
      
      return (
          <div>
              <div>Filho</div>
              <button onClick={
                  (e) => {
                      props.quandoClicar('João', gerarIdade(), true)
                  }
              }>
                  Fornecer Informaçoes
              </button>
          </div>
      )
}

export default IndiretaFilho;