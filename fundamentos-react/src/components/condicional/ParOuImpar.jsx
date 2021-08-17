import React from 'react';

const ParOuImpar = (props) => {
     const isPar = props.numero % 2 === 0;
     return(
        <div>
            {isPar ? <span>Par</span> : <span>ímpar</span>}
        </div>
     );
}

export default ParOuImpar;