import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';

// we pass to check the correct letters or wrong letters and we set the playable and playagain
const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => { 

    // below we keep track of the final message and final word and playable
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  // the notification helper that lets you know whether you won or lost
  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = 'Congratulations! You won! 😃';
    playable = false;
  } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = 'Unfortunately you lost. 😕';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

  //this handles the set playble and changes the state 
  useEffect(() => {
    setPlayable(playable);
  });

  return (
      // our button below is passed to App.js to the function that allows the user to play again
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default Popup;

// All references are on the main file App.js