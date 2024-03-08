import React, { useState } from 'react';

function InputComponent({ onInputChange }) {
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
    onInputChange(newValue);
  };


  return (
    <div>
      <input type="text" maxLength={1} value={inputText} onChange={handleChange} required 
    style={{
    margin: '10px',
    }}/>
    </div>
  );
}

export default InputComponent;
