import './Card.css';
import React from 'react';

const Card = (props) => {
     
    const cardStyle = {
        backgroundColor: props.color || '#F00', /* camelCase - se nao existir uma cor, aplique uma vermelha por padrao */
        borderColor: props.color || '#F00',
    }

     return(
         <div className="Card" style={cardStyle}>
             <div className="Title">{props.titulo}</div>
             <div className="Content">
                 {props.children}   {/* children - permite conseguir acessar os elementos de dentro de Card */}
             </div>
         </div>
     );
}

export default Card;