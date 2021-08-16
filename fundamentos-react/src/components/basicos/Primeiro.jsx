import React from 'react'; // precisa importar se for usar jsx

const Primeiro = () => {
    
    const msg = 'Seja Bem vindo!';

    return (
        <div>
            <h2>Primeiro Component</h2>
            <p className="paragrafo">{msg}</p>
        </div>
    );
};

export default Primeiro;