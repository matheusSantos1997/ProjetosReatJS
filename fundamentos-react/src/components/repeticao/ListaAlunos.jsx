import React from 'react';
import alunos from '../../data/alunos';

const removePoints = {
    listStyle: 'none'
}

const ListaAlunos = () => {

    const alunosLi = alunos.map((aluno) => {
         return (
             <li key={aluno.id}>
                 {aluno.id}) {aluno.nome} = {aluno.nota}
             </li>
         )
    });

    return(
        <div>
            <ul style={removePoints}>
                 {alunosLi} 
            </ul>
        </div>
    );
}

export default ListaAlunos;