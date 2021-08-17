import './TabelaProdutos.css';
import React from 'react';
import produtos from '../../data/produtos';

const TabelaProdutos = (props) => {
     
    const produtosTabela = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 === 0 ? 'par' : 'impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco.toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    });

     return (
        <div className="tabelaProdutos">
            <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
              {produtosTabela}
            </tbody>
            </table>
        </div>
     );
}

export default TabelaProdutos;