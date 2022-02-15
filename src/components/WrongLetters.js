import React from 'react'

const WrongLetters = ({ wrongLetters }) => {

  return (
      // wrong so instead of checking the correct letters we will check if we have any wrong letters and is handled in helper
      // each wrong letter will be shown in the span
      // the reduce will add a comma between each span of the wrong letter.
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && 
          <p>Wrong</p>
        }
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
      </div>
    </div>
  )
}

export default WrongLetters;

// All references are on the main file App.js