import React from 'react';
import alunos from '../../data/alunos';

const ListaAlunos = () => {
   // const li1 = <li>{alunos[0].id}) {alunos[0].nome} = {alunos[0].nota}</li>
    
    const lis = alunos.map((aluno) => {
         return (
             <li>
                 {aluno.id}) {aluno.nome} = {aluno.nota}
             </li>
         )
    })

    return(
        <div>
            <ul>
                 {lis}
            </ul>
        </div>
    );
}

export default ListaAlunos;