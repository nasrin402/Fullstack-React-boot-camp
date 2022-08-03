import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import { useState } from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

const TemparetureInput = ({scale, temperature, onTemperatureChange}) => {
    //const  [temperature, setTemperature] = useState('');
  const handleChange = (e) =>{
    e.preventDefault();
    onTemperatureChange(e.target.value);
    
  }
  console.log(temperature);
  return (
    <div>
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}</legend>
        <input   value={temperature} onChange={handleChange}/>
      </fieldset>
     
    </div>
  );
}

export default TemparetureInput;
