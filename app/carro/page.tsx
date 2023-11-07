
import React from 'react';
import { Colors } from '../styles/style';

const {primary, secondary, tertiary} = Colors;

const Carro: React.FC<Props> = ({ productos }) => {
  return (
    <div>
      <h2>Carro</h2>
      <ul>
        
        <h1 style={{color: primary}}>
            Hola
        </h1>
      </ul>
    </div>
  );
};

export default Carro;
