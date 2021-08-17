import React from 'react';
import If from './If';

const UsuarioInfo = (props) => {
     
     const usuario = props.usuario || {}
      
     return(
         <div>
             <If test={usuario && usuario.nome}>
             Seja bem vindo <strong>{ usuario.nome }</strong>!
             </If>
             <If test={usuario && usuario.email}>
                 Seu email é <strong>{ usuario.email}</strong>
             </If>
         </div>
     )
}

export default UsuarioInfo;