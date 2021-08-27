import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

// useRef muda o estado de um valor só que nao dispara uma nova renderizaçao
const UseRef = (props) => {
    
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const count = useRef(0); // retorna um objeto com a mesma referencia
    
    const myInput1 = useRef(null);
    const myinput2 = useRef(null);
    
    useEffect(() => {
        count.current = count.current + 1
        myinput2.current.focus()
    }, [value1]);

    useEffect(() => {
        count.current = count.current + 1
        myInput1.current.focus()
    }, [value2])
    

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!" />
            
            <SectionTitle title="Exercicio #01" />
            <div className="center">
              <div>
                  <span className="text">Valor: </span>
                  <span className="text">{value1} [</span>
                  <span className="text" style={{color:'red'}}>{count.current}</span>
                  <span className="text">]</span>
              </div>
                
               <input type="text" className="input" value={value1} ref={myInput1} onChange={(e) => setValue1(e.target.value)} />
            </div>

            <SectionTitle title="Exercicio #02" />
            <div className="center">
               <input type="text" className="input" value={value2} ref={myinput2} onChange={(e) => setValue2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
