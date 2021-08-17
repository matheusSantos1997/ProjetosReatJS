import React, { cloneElement } from 'react';

const Familia = (props) => {
     return(
        <div>
           {/* <FamiliaMembro nome="Matheus" sobrenome={props.sobrenome}></FamiliaMembro> */}
           {/* <FamiliaMembro nome="Fulano" {...props}></FamiliaMembro> operador spread recebe a propriedade */}
           {/* <FamiliaMembro nome="Ciclano" sobrenome="Souza"></FamiliaMembro> */}
           {/* {cloneElement(props.children, props)}  clona um elemento passando as propriedades de pai para filho somente um elemente */}
           {
               props.children.map((child, i) => {
                   return cloneElement(child, { ...props, key: i });
               })
           }
        </div>
     );
}

export default Familia;