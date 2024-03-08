import React, { useState } from 'react';
import WordComponent from './wordComponent';
import InputComponent from './inputComponent';
import HangedComponent from './hangedComponent';


function GameComponent() {
  const [wordValue, setWordValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [matchedLetters, setMatchedLetters] = useState({});
  const [failed, setFailed] = useState(0);

  const isLargeScreen = window.innerWidth > 1024;


  const handleInputChange = (value) => { //récupération de la valeur de l'input
    setInputValue(value);
  };

  const handleWordChange = (newWord) => { //récupération du mot à trouver
    setWordValue(newWord);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMatchedLetters = { ...matchedLetters };

    if (wordValue.split('').includes(inputValue)) // en cas de réussite
    {
    newMatchedLetters[inputValue] = true;
    setMatchedLetters(newMatchedLetters);
    }

    else { //en cas d'échec
    setFailed(prevFailed => prevFailed + 1)
    if (failed >=4) {
      setTimeout(() => {
        alert('echec');
        window.location.reload();
      }, 500)
    }
    }    
    } 

const matchedLettersStyles = Object.keys(matchedLetters).map((letter) => `
    .${letter} {
      color: black;
    }
  `).join(''); //coloration des lettres trouvées

  return (
    <div className='container'
    style={{ height: '70vh', 
    width: '60vw', 
    margin: 'auto', 
    border: '5px solid #85642e', borderRadius: "5%", boxShadow: '6px 6px 15px black',
    justifyContent: isLargeScreen ? 'space-around' : 'center',
    display: 'flex',
    flexDirection: isLargeScreen ? 'row-reverse' : 'column-reverse',
    }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <WordComponent className='letter' onWordChange={handleWordChange} />
        <InputComponent inputValue={inputValue} onInputChange={handleInputChange} />
        <button type="submit" 
        style={{ 
          margin: '10px',
          backgroundImage: 'linear-gradient(to left bottom, #c07b0f, #a76b17, #8e5c1b, #764d1d, #5e3f1d)',
          textTransform: 'uppercase',
          boxShadow: ' 0 0 5px rgba(0, 0, 0, 1)',
          padding: '10px 20px', 
          fontSize: '16px', 
          borderRadius: '5px',
          border: '1px #fff'
        }}>Vérifier</button>
      </form>
      {failed > 0 &&(
      <div>
      <HangedComponent failed={failed}/>
      </div>)}
      <style>
        {matchedLettersStyles}
      </style>
    </div>
  );
}

export default GameComponent;
