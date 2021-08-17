import React from 'react';
import DiretaFilho from './DiretaFilho';

const DiretaPai = (props) => {
     return(
         <div>
             <div>
             <DiretaFilho nome="Ciclano" idade={23} nerd={false} />
             </div>

             <div>
             <DiretaFilho nome="Fulano" idade={30} nerd={true} />
             </div>

         </div>
     )
}

export default DiretaPai;