import React from 'react'

const Notification = ({ showNotification }) => {
    // we pass in the shownotification from the helpers showclass to show the notification if  its true we show else if not show nothing and show the promp notification
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </div>
  )
}

export default Notification;

// All references are on the main App.js file