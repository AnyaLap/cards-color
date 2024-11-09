import React, { useState } from 'react';
import "./Input.css";

export const TextInputComponent = () => {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    setDisplayText(inputText.toUpperCase());
    setInputText('');
  };

  return (
    <div>
      <div className='input-wrapper'>
        <input 
          type="text" 
          value={inputText} 
          onChange={handleInputChange} 
          placeholder="Введите текст" 
          className='input-text'
        />
        <button 
        className='input-btn'
        onClick={handleButtonClick}>Добавить</button>
      </div>
      <div className='input-info'>
       {displayText}
      </div>
    </div>
  );
};
