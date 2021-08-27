import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

function calcFatorial(n){
    if(n < 0) return -1;
    if(n === 0) return 1;
    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);

    useEffect(() => {
       setFatorial(calcFatorial(number))
    }, [number])

    useEffect(() => {
        if(fatorial > 100){
            document.title = 'mudou!!';
        } else {
            document.title = 'React App'
        }
    })

    // desafio se o numero é par ou impar
    const [status, setStatus] = useState(1);

    useEffect(() => {
        setStatus(number % 2 === 0 ? 'Par' : 'Impar')
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!" />
            
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text" style={{color: 'red', backgroundColor: 'purple'}}>{fatorial === -1 ? 'Não existe' : fatorial}</span>
                </div>
                <input type="number" className="input" value={number} onChange={(e) => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <span className="text" style={{fontSize: '20px'}}>número: </span>
                <span className="text" style={{color: 'red', fontSize: '20px'}}>{status}</span>
            </div>
        </div>
    )
}

export default UseEffect
