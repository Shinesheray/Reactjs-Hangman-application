import React from 'react'

// created a functional component for the header component
const Header = () => {
  return (
      // we can just return a fragment without adding the html elements in a div tag
    <> 
      <h1>Hangman</h1>
      <p>Find the hidden word - Enter a letter</p>
    </>
  )
}

export default Header;

// All references are on the main file App.js