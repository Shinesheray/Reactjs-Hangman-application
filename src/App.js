import React, { useState, useEffect } from 'react'; // we also need to import use state and useeffect to use our app states and effects
import Header from './components/Header'; // importing our components
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import { showNotification as show, checkWin } from './helpers/helpers';

import './App.css';

// 
const words = ['application', 'programming', 'interface', 'wizard'];// here we hold our correct words in our correct words Array
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {

  // below we have our states to check whether the game is playable, keep track of the correct letters and wrong letters 
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false); // state for the show notification of we used a word before 

 // we use the useEffect as our event listener in reactjs 
 // we create the event with parametors Key and keycode, which will check each of the letter keys on the keyboard
 // we selecet the word and inlcudes the letter and lower case the letter 
  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);// the dots spreads the letters and take our current letters that we have in the array and add to it
          } else {
            show(setShowNotification); // so this will show the correct letter from the notification
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown); // this event listener gets called by the below event listener

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]); // we call the event listener without adding too many event listerners

  function playAgain() { // we set the playable sectoin
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]); // will clear all correct and worng letters so that we can play again
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length); // allows to selet a random word from our array
    selectedWord = words[random];
  }

  return (
    // we return our components below whilst passing our props created down to the below components 
    // each time you refresh/restart a game you will be displayed to create a new word from the array
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;

//References
// I was able to find more resource on creating the use state effect from : reactjs.org and We3shools.org
 // we handle our use effect to handle keybaord events which I also used in my prevouse Task MontyHall
// I used some of the strucrure and styling from the google style guiude
// I was able to find and follow a reference from https://www.youtube.com/watch?v=jj0W8tYX_q8&t=338s
// I was able to modify this Javascript code to fit into my react code and work for react https://github.com/bradtraversy/vanillawebprojects/tree/master/hangman
