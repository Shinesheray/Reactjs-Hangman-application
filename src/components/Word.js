import React from 'react';

// instead of passing props we will use a destructed method using parameters 
// in order to display the words we pass through the below 
const Word = ({ selectedWord, correctLetters }) => { 

  return (
      //we take the selected word and map it. then within the map we have our correct letters is checked to see
      // if it includes the correct letter in the letters array, then if it is we display the correct letter in the span, if its not then display blank
    <div className="word">
      {selectedWord.split('').map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        )
      })}
    </div>
  )
}

export default Word;